'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from '@/components/Navbar'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import EducationTransformSVG from '@/components/EducationTransformationSVG'
import ConnectingCommunitiesSVG from '@/components/ConnectingCommunitiesSVG'
import Footer from '@/components/Footer'

// Custom hook for intersection observer
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

// Animated section component
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

export default function GradeLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        <AnimatedSection className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#5D4FB7] mb-4">Transforma la educación</h1>
              <p className="text-xl text-gray-600 mb-6">
                En la era digital, la comunicación efectiva es fundamental. Descubre cómo Grade está revolucionando la interacción en las instituciones educativas.
              </p>
              <Link href="/caracteristicas">
                <Button className="bg-[#FF8C42] hover:bg-[#FF6B1A] text-white text-lg px-8 py-3">
                  Explora Grade
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <EducationTransformSVG className="w-full h-auto" />
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-gray-100 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#5D4FB7] mb-12">Conectando comunidades educativas</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                className="md:w-1/2 mb-10 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <ConnectingCommunitiesSVG className="w-full h-auto" />
              </motion.div>
              <motion.div
                className="md:w-1/2 mt-10 md:mt-0 md:pl-8 flex flex-col items-end text-right"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <p className="text-lg text-gray-600 mb-6">
                  Grade crea puentes entre educadores, estudiantes y familias, fomentando un ambiente de colaboración sin precedentes. Nuestra plataforma ofrece un espacio digital seguro y dinámico para fortalecer los lazos de la comunidad educativa.
                </p>
                <Link href="/experiencias">
                  <Button className="bg-[#FF8C42] hover:bg-[#FF6B1A] text-white">
                    Descubre testimonios
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#5D4FB7] mb-8">Simplifica la gestión educativa</h2>
            <p className="text-xl text-gray-600 mb-12">
              Optimiza los procesos administrativos y académicos con Grade. Nuestra plataforma integra herramientas intuitivas que facilitan la organización y el seguimiento del progreso educativo para todos los miembros de la comunidad.
            </p>
            <Link href="/contacto">
              <Button className="bg-[#FF8C42] hover:bg-[#FF6B1A] text-white text-lg px-8 py-3">
                Solicita una demo
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#5D4FB7] mb-12">Instituciones que confían en nosotros</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {['🎓', '📚', '🖥️', '🔬', '🏆'].map((emoji, i) => (
                <motion.div
                  key={i}
                  className="text-6xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.5, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                >
                  <span role="img" aria-label={`Institución ${i + 1}`}>{emoji}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer/>
    </div>
  )
}