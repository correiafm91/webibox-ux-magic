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
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/4ac2d23d-995d-44fd-a6e1-23dafb00c570.png"
          alt="Background Illustration"
          className="absolute top-0 left-0 w-1/3 opacity-10"
        />
        <img
          src="/lovable-uploads/8e599068-575d-458a-943b-33bf287de3d6.png"
          alt="Background Illustration"
          className="absolute top-1/4 right-0 w-1/3 opacity-10"
        />
        <img
          src="/lovable-uploads/b7174412-8fad-4c49-ac83-5bb82cec0349.png"
          alt="Background Illustration"
          className="absolute bottom-0 left-1/4 w-1/3 opacity-10"
        />
      </div>
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
        </div>
      </div>
    </section>
  );
};