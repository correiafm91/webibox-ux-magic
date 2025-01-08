import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm text-primary bg-primary/10 rounded-full">
              Inovação em Design Digital
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Criamos experiências digitais extraordinárias
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Transformamos sua visão em realidade com design minimalista e tecnologia de ponta
            </p>
            <Button size="lg" className="group">
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
                src="/lovable-uploads/4ac2d23d-995d-44fd-a6e1-23dafb00c570.png"
                alt="Hero Illustration"
                className="w-full h-auto animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};