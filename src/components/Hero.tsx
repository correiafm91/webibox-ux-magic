import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [text, setText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10],
    x: [-5, 5],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="absolute inset-0 z-0">
        <motion.img
          animate={{
            ...floatingAnimation,
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 0.15 : 0.1
          }}
          transition={{ duration: 0.5 }}
          src="/lovable-uploads/4ac2d23d-995d-44fd-a6e1-23dafb00c570.png"
          alt="Background Illustration"
          className="absolute top-0 left-0 w-1/3"
        />
        <motion.img
          animate={{
            ...floatingAnimation,
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 0.15 : 0.1,
            y: [10, -10], // Opposite direction for variety
            x: [5, -5]
          }}
          transition={{ duration: 0.5 }}
          src="/lovable-uploads/8e599068-575d-458a-943b-33bf287de3d6.png"
          alt="Background Illustration"
          className="absolute top-1/4 right-0 w-1/3"
        />
        <motion.img
          animate={{
            ...floatingAnimation,
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 0.15 : 0.1,
            y: [-5, 5], // Different range for variety
            x: [-3, 3]
          }}
          transition={{ duration: 0.5 }}
          src="/lovable-uploads/b7174412-8fad-4c49-ac83-5bb82cec0349.png"
          alt="Background Illustration"
          className="absolute bottom-0 left-1/4 w-1/3"
        />
      </div>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-4 py-2 mb-6 text-sm text-white bg-blue-700/30 rounded-full hover:bg-blue-600/40 transition-colors cursor-pointer"
            >
              Inovação em UX e UI
            </motion.span>
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white hover:text-blue-200 transition-colors"
            >
              {text}
              <span className="animate-pulse">|</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-blue-100 mb-8 max-w-lg mx-auto lg:mx-0 hover:text-white transition-colors"
            >
              Criamos sites profissionais, personalizados e focados na experiência do usuário. A Webibox é uma solução ideal para empreendedores que buscam um site que não apenas impressiona, mas converte e gera resultados reais.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};