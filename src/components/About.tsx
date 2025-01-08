import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <img
              src="/lovable-uploads/b7174412-8fad-4c49-ac83-5bb82cec0349.png"
              alt="About Illustration"
              className="w-full max-w-lg mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm text-primary bg-primary/10 rounded-full">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformando ideias em experiências digitais memoráveis
            </h2>
            <p className="text-gray-600 mb-6">
              Somos uma equipe apaixonada por criar soluções digitais que não apenas impressionam visualmente, mas também geram resultados reais para nossos clientes.
            </p>
            <ul className="space-y-4">
              {[
                "Design centrado no usuário",
                "Tecnologia de ponta",
                "Resultados mensuráveis",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};