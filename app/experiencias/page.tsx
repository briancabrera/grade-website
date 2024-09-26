'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const testimonials = [
  {
    name: "María González",
    role: "Directora General",
    school: "Colegio San José",
    emoji: "👩‍🏫",
    quote: "Grade ha transformado nuestra forma de gestionar la educación. La comunicación con las familias nunca había sido tan fluida y eficiente."
  },
  {
    name: "Carlos Rodríguez",
    role: "Coordinador Académico",
    school: "Instituto Tecnológico Avanzado",
    emoji: "👨‍🎓",
    quote: "La plataforma es intuitiva y fácil de usar. Ha mejorado significativamente nuestra organización interna y el seguimiento del progreso de los estudiantes."
  },
  {
    name: "Ana Martínez",
    role: "Profesora de Primaria",
    school: "Escuela Creativa",
    emoji: "👩‍🏫",
    quote: "Grade me permite mantener un contacto constante con los padres y compartir recursos educativos de manera sencilla. ¡Es una herramienta indispensable!"
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

export default function ExperienciasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar/>

      <main className="flex-grow">
        <AnimatedSection className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-[#5D4FB7] mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Experiencias Grade
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Descubre cómo Grade está transformando la gestión educativa en instituciones de todo el país.
            </motion.p>
            <motion.div 
              className="flex justify-center items-center space-x-2 text-[#FF8C42]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="#FF8C42" size={32} />
              ))}
            </motion.div>
            <motion.p 
              className="text-2xl font-bold mt-4 text-[#5D4FB7]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              &quot;Súper práctico y útil&quot;
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center text-[#5D4FB7] mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Lo que dicen nuestros usuarios
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    <span role="img" aria-label="Person" className="text-4xl mr-4">{testimonial.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-[#5D4FB7]">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-600">{testimonial.school}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-[#5D4FB7] mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ¿Quieres Grade para tu institución?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Únete a las instituciones educativas que ya están transformando su gestión con Grade.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/contacto">
                <Button className="bg-[#FF8C42] hover:bg-[#FF6B1A] text-white text-lg px-8 py-3">
                  Contactar a ventas
                </Button>
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>

      <Footer/>
    </div>
  )
}