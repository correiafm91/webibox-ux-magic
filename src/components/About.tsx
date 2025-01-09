import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
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
              Transforme sua presença online com a Webibox
            </h2>
            <p className="text-blue-600 mb-6">
              Na Webibox, criamos sites profissionais e impactantes, focados em uma experiência de usuário (UX) impecável, que não apenas encantam, mas também convertem. Nossa missão é garantir que cada visita ao seu site se transforme em seus clientes, com um design intuitivo e funcional, que guie seus leads para a conversão.
            </p>
            <p className="text-blue-600">
              Com soluções personalizadas e inovadoras, entregamos sites que não só impressionam, mas também geram resultados reais. A Webibox é o parceiro ideal para empreendedores quem busca resultados rápidos, com qualidade e foco na experiência do usuário, impulsionando suas vendas e tornando cada visita um passo mais próximo de fidelizar seu cliente.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};