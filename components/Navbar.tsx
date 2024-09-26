'use client';

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <span role="img" aria-label="School" className="text-3xl leading-none mb-2">🏫</span>
          <span className="text-2xl font-bold text-[#5D4FB7]">Grade</span>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/caracteristicas" className="text-gray-600 hover:text-[#FF8C42]">Características</Link>
          <Link href="/experiencias" className="text-gray-600 hover:text-[#FF8C42]">Experiencias</Link>
          <Link href="/contacto" className="text-gray-600 hover:text-[#FF8C42]">Contacto</Link>
          <Link href="/soporte" className="text-gray-600 hover:text-[#FF8C42]">Soporte</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/pre-login">
            <Button className="bg-[#5D4FB7] hover:bg-[#7161EF] text-white">Acceder</Button>
          </Link>
          <button
            className="md:hidden text-gray-600 hover:text-[#FF8C42]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed left-0 right-0 top-[72px] bg-white shadow-md md:hidden z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-4">
              <Link href="/caracteristicas" className="block py-2 text-gray-600 hover:text-[#FF8C42]">Características</Link>
              <Link href="/experiencias" className="block py-2 text-gray-600 hover:text-[#FF8C42]">Experiencias</Link>
              <Link href="/contacto" className="block py-2 text-gray-600 hover:text-[#FF8C42]">Contacto</Link>
              <Link href="/soporte" className="block py-2 text-gray-600 hover:text-[#FF8C42]">Soporte</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}