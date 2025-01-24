import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [text, setText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const fullText = "Webibox";
  
  // Mouse movement for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse movement to rotation
  const rotateX = useTransform(mouseY, [-500, 500], [30, -30]);
  const rotateY = useTransform(mouseX, [-500, 500], [-30, 30]);

  // Add spring physics for smooth animation
  const springConfig = { damping: 25, stiffness: 700 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

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

  const handleMouseMove = (event: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    mouseX.set(clientX - left - width / 2);
    mouseY.set(clientY - top - height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#020817] to-[#1a365d]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 mb-6 text-sm text-white bg-blue-700/30 rounded-full hover:bg-blue-600/40 transition-colors cursor-pointer"
            >
              Inovação em UX e UI
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight text-white hover:text-blue-200 transition-colors tracking-tight"
            >
              {text}
              <span className="animate-pulse">|</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-blue-100 mb-8 max-w-lg mx-auto lg:mx-0 hover:text-white transition-colors"
            >
              Criamos sites profissionais, personalizados e focados na experiência do usuário. A Webibox é uma solução ideal para empreendedores que buscam um site que não apenas impressiona, mas converte e gera resultados reais.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex-1 perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transformStyle: "preserve-3d",
              rotateX: springRotateX,
              rotateY: springRotateY,
            }}
          >
            <motion.img
              src="/lovable-uploads/4b95d798-fcaa-4e65-81c8-2c8246adbd2f.png"
              alt="3D Illustration"
              className="w-full h-auto max-w-2xl mx-auto transform-gpu"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};