'use client';

import { useEffect, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, X } from 'lucide-react'
import Footer from '@/components/Footer'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full m-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end">
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          {children}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function PreLoginPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
            <h2 className="text-2xl font-bold text-center text-[#5D4FB7] mb-6">¡Hola!</h2>
            <p className="text-center text-gray-600 mb-6">
              Por favor, seleccioná la opción que corresponda para continuar:
            </p>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Link href="/login" className="w-full block">
                  <Button className="w-full bg-[#5D4FB7] hover:bg-[#7161EF] text-white">
                    Tengo cuenta
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Button 
                  variant="outline" 
                  className="w-full border-[#5D4FB7] text-[#5D4FB7] hover:bg-[#5D4FB7] hover:text-white"
                  onClick={openModal}
                >
                  No tengo cuenta
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h3 className="text-2xl font-bold text-[#5D4FB7] mb-4">Solicitud de Cuenta</h3>
        <p className="text-gray-600 mb-6">
          Para obtener una cuenta en Grade, por favor contacta al administrador responsable de tu institución. Ellos podrán enviarte una invitación para unirte a la plataforma.
        </p>
        <Button 
          className="w-full bg-[#FF8C42] hover:bg-[#FF6B1A] text-white"
          onClick={closeModal}
        >
          Entendido
        </Button>
      </Modal>

      <Footer/>
    </div>
  )
}