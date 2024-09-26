'use client';

import { useState, useEffect, useRef, ReactNode } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SupportSVG from '@/components/SupportSVG'

const faqs = [
  {
    question: "¿Cómo puedo comenzar a usar Grade en mi institución?",
    answer: "Para comenzar a usar Grade, simplemente solicita una demo a través de nuestro sitio web. Nuestro equipo se pondrá en contacto contigo para guiarte a través del proceso de implementación y configuración inicial."
  },
  {
    question: "¿Grade es compatible con otros sistemas de gestión educativa?",
    answer: "Sí, Grade está diseñado para integrarse con una variedad de sistemas y herramientas educativas. Trabajamos constantemente para ampliar nuestras integraciones y asegurar una experiencia fluida para nuestros usuarios."
  },
  {
    question: "¿Qué tipo de soporte técnico ofrece Grade?",
    answer: "Ofrecemos soporte técnico completo a través de múltiples canales, incluyendo chat en vivo, correo electrónico y teléfono. Nuestro equipo de soporte está disponible durante horario laboral para ayudarte con cualquier consulta o problema que puedas tener."
  },
  {
    question: "¿Cómo garantiza Grade la seguridad de los datos?",
    answer: "La seguridad de los datos es nuestra prioridad. Utilizamos encriptación de extremo a extremo, realizamos copias de seguridad regulares y cumplimos con todas las regulaciones de protección de datos aplicables para garantizar que la información de tu institución esté siempre segura."
  },
  {
    question: "¿Puedo personalizar Grade según las necesidades específicas de mi institución?",
    answer: "Absolutamente. Grade ofrece una amplia gama de opciones de personalización para adaptarse a las necesidades únicas de cada institución. Desde la configuración de módulos hasta la personalización de informes, trabajamos contigo para asegurar que Grade se ajuste perfectamente a tus requerimientos."
  }
]

function useIntersectionObserver(ref: React.RefObject<Element>, options: IntersectionObserverInit = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isIntersecting;
}

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default function SoportePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar/>

      <main className="flex-grow">
        <AnimatedSection className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div 
                className="md:w-1/2 md:pr-8 mb-8 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-[#5D4FB7] mb-4 text-center">Centro de Soporte</h1>
                <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                  Estamos aquí para ayudarte. Encuentra respuestas a preguntas frecuentes o contáctanos para obtener asistencia personalizada.
                </p>
              </motion.div>
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <SupportSVG className="w-full h-auto" />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 px-6 bg-gray-100">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-[#5D4FB7] mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Preguntas Frecuentes
            </motion.h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-[#5D4FB7]">{faq.question}</span>
                    {openFaq === index ? <ChevronUp className="text-[#5D4FB7]" /> : <ChevronDown className="text-[#5D4FB7]" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-[#5D4FB7] mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ¿Necesitas más ayuda?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Nuestro equipo de soporte está listo para asistirte con cualquier consulta o problema que puedas tener.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/contacto">
                <Button className="bg-[#FF8C42] hover:bg-[#FF6B1A] text-white text-lg px-8 py-3">
                  Contáctanos
                </Button>
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}