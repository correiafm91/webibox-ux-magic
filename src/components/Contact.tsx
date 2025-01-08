import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const Contact = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm text-primary bg-primary/10 rounded-full">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vamos criar algo incrível juntos
            </h2>
            <p className="text-gray-600 mb-8">
              Entre em contato conosco para discutir seu próximo projeto digital
            </p>
            <img
              src="/lovable-uploads/8e599068-575d-458a-943b-33bf287de3d6.png"
              alt="Contact Illustration"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome</label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensagem</label>
                  <Textarea
                    placeholder="Como podemos ajudar?"
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full">Enviar mensagem</Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};