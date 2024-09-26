'use client';

import { useState, FormEvent, ChangeEvent, useEffect, useRef, ReactNode } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'

interface FormData {
  nombre: string;
  cargo: string;
  institucion: string;
  email: string;
  telefono: string;
  horario: string;
  mensaje: string;
}

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

export default function ContactoPage() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    cargo: '',
    institucion: '',
    email: '',
    telefono: '',
    horario: '',
    mensaje: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log(formData)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar/>

      <main className="flex-grow">
        <AnimatedSection className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-[#5D4FB7] mb-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ¡Te estábamos esperando!
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contanos cómo podemos ayudarte y nos comunicaremos con vos a la brevedad:
            </motion.p>
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.6 }}>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">¿Cómo te llamás?*</label>
                <Input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Completar con tu Nombre y Apellido ..."
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.7 }}>
                <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-1">¿Cuál es tu cargo?</label>
                <Input
                  type="text"
                  id="cargo"
                  name="cargo"
                  placeholder="Completar con tu cargo..."
                  value={formData.cargo}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.8 }}>
                <label htmlFor="institucion" className="block text-sm font-medium text-gray-700 mb-1">¿A qué institución pertenecés?*</label>
                <Input
                  type="text"
                  id="institucion"
                  name="institucion"
                  placeholder="Completar con el nombre de tu institución..."
                  value={formData.institucion}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.9 }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">¿Cómo es tu dirección de correo institucional?*</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Completar con tu correo institucional..."
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 1 }}>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">¿Cuál es tu teléfono de contacto?*</label>
                <Input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="Completar con tu teléfono de contacto..."
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 1.1 }}>
                <label htmlFor="horario" className="block text-sm font-medium text-gray-700 mb-1">¿En qué horario te resulta más cómodo que te llamemos?</label>
                <Select 
                  name="horario" 
                  value={formData.horario}
                  onValueChange={(value: string) => setFormData(prev => ({ ...prev, horario: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Por favor, seleccionar una opción..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manana">Mañana (9:00 - 12:00)</SelectItem>
                    <SelectItem value="tarde">Tarde (13:00 - 17:00)</SelectItem>
                    <SelectItem value="noche">Noche (18:00 - 21:00)</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 1.2 }}>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">¿Cómo podemos ayudarte?*</label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Por favor, contanos la mayor cantidad de detalles posibles."
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div 
                className="text-center"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <Button type="submit" className="bg-[#FF8C42] hover:bg-[#FF6B1A] text-white text-lg px-8 py-3">
                  Enviar tu mensaje
                </Button>
              </motion.div>
            </motion.form>
          </div>
        </AnimatedSection>
      </main>

      <Footer/>
    </div>
  )
}