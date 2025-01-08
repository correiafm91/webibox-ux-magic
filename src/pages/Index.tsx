import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Hero />
      <Features />
      <About />
      <Stats />
      <FAQ />
      <Contact />
    </motion.div>
  );
};

export default Index;