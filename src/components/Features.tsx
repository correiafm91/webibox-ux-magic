import { motion } from "framer-motion";
import { Layout, Smile, PenTool, Palette, DollarSign, Zap } from "lucide-react";

const features = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: "UI (Interface do Usuário)",
    description: "Design intuitivo e moderno que cativa seus visitantes desde o primeiro contato.",
  },
  {
    icon: <Smile className="h-6 w-6" />,
    title: "UX (Experiência do Usuário)",
    description: "Navegação fluida e intuitiva que mantém seus usuários engajados.",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Copywriting de Alta Conversão",
    description: "Textos estratégicos que transformam visitantes em clientes.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Personalização Sob Medida",
    description: "Cada projeto é único, desenvolvido especialmente para sua marca.",
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Custo-Benefício Excepcional",
    description: "Investimento inteligente com retorno garantido para seu negócio.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Otimização de Desempenho",
    description: "Sites rápidos e otimizados para melhor experiência e ranking no Google.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/376b94c7-40ff-445e-8442-9c99117a597c.png"
          alt="Background Illustration"
          className="absolute top-1/4 right-0 w-1/3 opacity-10"
        />
        <img
          src="/lovable-uploads/b421e3df-a663-4c1a-b7bc-7918f32773b9.png"
          alt="Background Illustration"
          className="absolute bottom-0 left-0 w-1/3 opacity-10"
        />
        <img
          src="/lovable-uploads/8d60c0c4-12c6-4107-ae5d-72428f5ed5f5.png"
          alt="Background Illustration"
          className="absolute top-0 left-1/4 w-1/3 opacity-10"
        />
      </div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-blue-900"
          >
            Por que nos escolher?
          </motion.h2>
          <p className="text-blue-600 max-w-2xl mx-auto">
            Combinamos design excepcional com tecnologia de ponta para criar experiências digitais memoráveis
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">{feature.title}</h3>
              <p className="text-blue-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};