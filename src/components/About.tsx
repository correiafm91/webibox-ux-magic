import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-24 bg-white">
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
              src="/lovable-uploads/2526d1de-d3cd-4a3d-8aa5-75c55c2591be.png"
              alt="Webibox Logo"
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
            <span className="inline-block px-4 py-2 mb-6 text-sm text-blue-600 bg-blue-50 rounded-full">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              Transformando ideias em experiências digitais memoráveis
            </h2>
            <p className="text-blue-600 mb-6">
              Somos uma equipe apaixonada por criar soluções digitais que não apenas impressionam visualmente, mas também geram resultados reais para nossos clientes. Nossa missão é transformar a presença digital dos nossos clientes através de designs inovadores e estratégias eficientes.
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
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-blue-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};