import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/e07a2760-b8ad-49ea-8e00-3dbcd77c51d7.png"
          alt="Background Illustration"
          className="absolute top-0 left-0 w-1/3 opacity-10"
        />
        <img
          src="/lovable-uploads/9bb4d85f-8bec-457f-8486-b2c7546a8208.png"
          alt="Background Illustration"
          className="absolute top-1/4 right-0 w-1/3 opacity-10"
        />
        <img
          src="/lovable-uploads/4241f490-8a92-4263-aa54-6e005b379f04.png"
          alt="Background Illustration"
          className="absolute bottom-0 left-1/4 w-1/3 opacity-10"
        />
      </div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm text-blue-600 bg-blue-50 rounded-full">
              Vamos criar algo incrível juntos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              Entre em contato
            </h2>
            <p className="text-blue-600 mb-8">
              Estamos prontos para transformar suas ideias em realidade digital
            </p>
            <Button className="group bg-blue-600 text-white hover:bg-blue-700">
              Comece agora
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};