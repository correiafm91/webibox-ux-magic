import { motion } from "framer-motion";
import { Layout, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Design Intuitivo",
    description: "Interfaces claras e fáceis de usar, pensadas para seu público",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Alta Performance",
    description: "Sites rápidos e otimizados para melhor experiência",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Resultados Reais",
    description: "Foco em conversão e crescimento do seu negócio",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Por que nos escolher?
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combinamos design excepcional com tecnologia de ponta para criar experiências digitais memoráveis
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};