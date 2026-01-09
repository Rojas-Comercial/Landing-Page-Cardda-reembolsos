import React from 'react';
import { motion } from 'framer-motion';
import { Link, Upload, CheckCircle } from 'lucide-react';
const steps = [{
  icon: Link,
  title: 'Admin genera link',
  desc: 'Envía un enlace único al colaborador'
}, {
  icon: Upload,
  title: 'Empleado sube foto',
  desc: 'Captura la boleta desde el celular'
}, {
  icon: CheckCircle,
  title: 'Admin aprueba y paga',
  desc: 'Un clic y el dinero está transferido'
}];
export function ReimbursementFlow() {
  return <section className="py-24 bg-[#151515] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Reembolsos en 3 simples pasos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Olvídate de las planillas de rendición y los correos perdidos.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-[#38424e] z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => <motion.div key={index} className="flex flex-col items-center text-center" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.2
          }}>
                <div className="w-24 h-24 rounded-full bg-[#38424e] border-4 border-[#fa7210] flex items-center justify-center mb-6 shadow-lg shadow-[#fa7210]/20 relative">
                  <step.icon className="w-10 h-10 text-[#fa7210]" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#fa7210] flex items-center justify-center font-bold text-white text-sm border-2 border-[#151515]">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}