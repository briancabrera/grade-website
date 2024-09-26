'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from '@/components/Navbar'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from '@/components/Footer'
import VirtualAssistantSVG from '@/components/VirtualAssistantSVG'

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

export default function CaracteristicasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        <AnimatedSection className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                className="md:w-1/2 md:pr-8 mb-8 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-[#5D4FB7] mb-4">Tu asistente educativo virtual</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Grade simplifica la gestión educativa, mejora la comunicación y optimiza los procesos administrativos para instituciones educativas de todos los niveles.
                </p>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <VirtualAssistantSVG className="w-full h-auto" />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  emoji: "📚",
                  label: "Gestión académica",
                  title: "Gestión académica integral",
                  description: "Administra calificaciones, asistencias, horarios y planes de estudio de manera eficiente y centralizada."
                },
                {
                  emoji: "💬",
                  label: "Comunicación",
                  title: "Comunicación efectiva",
                  description: "Mantén a padres, alumnos y profesores conectados con mensajería instantánea, notificaciones y anuncios importantes."
                },
                {
                  emoji: "📊",
                  label: "Análisis",
                  title: "Análisis y reportes avanzados",
                  description: "Obtén insights valiosos sobre el desempeño escolar con nuestras herramientas de análisis y generación de informes personalizados."
                },
                {
                  emoji: "🏫",
                  label: "Gestión de recursos",
                  title: "Gestión de recursos",
                  description: "Optimiza la asignación de aulas, equipos y materiales didácticos con nuestro sistema de reservas y seguimiento."
                },
                {
                  emoji: "✍️",
                  label: "Evaluaciones",
                  title: "Evaluaciones en línea",
                  description: "Crea, administra y califica exámenes de forma digital, ahorrando tiempo y recursos."
                },
                {
                  emoji: "🔗",
                  label: "Integración",
                  title: "Integración con otras plataformas",
                  description: "Conecta Grade con tus herramientas educativas favoritas para una experiencia de aprendizaje sin interrupciones."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <span role="img" aria-label={feature.label} className="text-5xl mb-4 block">{feature.emoji}</span>
                  <h2 className="text-2xl font-semibold text-[#5D4FB7] mb-4">{feature.title}</h2>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold text-[#5D4FB7] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Simplifica tu gestión educativa hoy
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Únete a las instituciones educativas que ya están transformando su forma de trabajar con Grade.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link href="/contacto">
                <Button className="bg-[#FF8C42] hover:bg-[#FF6B1A] text-white text-lg px-8 py-3">
                  Solicita una demo
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