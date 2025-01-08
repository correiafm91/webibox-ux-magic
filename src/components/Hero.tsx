import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Webibox, muito mais do que sites";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm text-white bg-blue-700/30 rounded-full">
              Inovação em Design Digital
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              {text}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-lg mx-auto lg:mx-0">
              Criamos sites profissionais, personalizados e focados na experiência do usuário. A Webibox é uma solução ideal para empreendedores que buscam um site que não apenas impressiona, mas converte e gera resultados reais.
            </p>
            <Button size="lg" className="group bg-white text-blue-900 hover:bg-blue-50">
              Comece agora
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <img
                src="/lovable-uploads/2526d1de-d3cd-4a3d-8aa5-75c55c2591be.png"
                alt="Webibox Logo"
                className="w-full h-auto animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};