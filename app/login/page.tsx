'use client';

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from "next/link"
import { FaGoogle } from 'react-icons/fa'
import { ArrowLeft } from 'lucide-react'
import Footer from '@/components/Footer'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    // Ensure the page starts at the top when it loads
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación
    console.log('Login attempt', { email, password })
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
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Button 
                variant="outline"
                className="w-full flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 transition-colors duration-300"
                style={{ 
                  boxShadow: '0 2px 4px 0 rgba(0,0,0,.25)'
                }}
              >
                <div className="flex items-center">
                  <FaGoogle className="mr-2" style={{ color: '#4285F4' }} />
                  <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>
                    <span style={{ color: '#4285F4' }}>G</span>
                    <span style={{ color: '#EA4335' }}>o</span>
                    <span style={{ color: '#FBBC05' }}>o</span>
                    <span style={{ color: '#4285F4' }}>g</span>
                    <span style={{ color: '#34A853' }}>l</span>
                    <span style={{ color: '#EA4335' }}>e</span>
                  </span>
                </div>
              </Button>
            </motion.div>
            <motion.div 
              className="relative mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <hr className="border-gray-300" />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
                o
              </span>
            </motion.div>
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <Input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <Button type="submit" variant="default" className="w-full bg-[#FF8C42] hover:bg-[#FF6B1A] text-white">
                  Ingresar
                </Button>
              </motion.div>
            </motion.form>
            <motion.div 
              className="mt-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              <Link href="/reset-password" className="text-sm text-[#5D4FB7] hover:underline">
                Olvidé mi contraseña
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.4 }}
          >
            <p className="text-sm text-gray-600">
              ¿No tenés cuenta? <Link href="/contacto" className="text-[#5D4FB7] hover:underline">Solicitar invitación</Link>
            </p>
          </motion.div>
        </motion.div>
      </main>

      <Footer/>
    </div>
  )
}