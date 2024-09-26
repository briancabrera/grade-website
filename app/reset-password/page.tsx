'use client';

import { useState, FormEvent, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FaQuestionCircle } from 'react-icons/fa'
import { ArrowLeft } from 'lucide-react'
import Footer from '@/components/Footer'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')

  useEffect(() => {
    // Ensure the page starts at the top when it loads
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí iría la lógica para solicitar una nueva contraseña
    console.log('Password reset request for', email)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <motion.header 
        className="p-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/">
          <Button variant="ghost" className="text-[#5D4FB7] hover:text-[#7161EF]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>
      </motion.header>

      <main className="flex-grow flex items-center justify-center px-4">
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <motion.span 
              role="img" 
              aria-label="School" 
              className="text-5xl inline-block"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              🏫
            </motion.span>
            <motion.h1 
              className="text-3xl font-bold text-[#5D4FB7] mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Grade
            </motion.h1>
          </div>
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-center text-[#5D4FB7] mb-6">Olvidé mi contraseña</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Input
                  type="email"
                  placeholder="Ingresar correo electrónico"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  required
                  className="pr-10 border-gray-300 focus:border-[#5D4FB7] focus:ring-[#5D4FB7]"
                />
                <FaQuestionCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Button type="submit" className="w-full bg-[#5D4FB7] hover:bg-[#7161EF] text-white">
                  Continuar
                </Button>
              </motion.div>
            </form>
          </motion.div>
          <motion.div 
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <Link href="/login" className="text-sm text-[#5D4FB7] hover:underline">
              ¿Tenés inconvenientes? Buscá ayuda aquí.
            </Link>
          </motion.div>
        </motion.div>
      </main>

      <Footer/>
    </div>
  )
}