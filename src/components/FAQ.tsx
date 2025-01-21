import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é um protótipo?",
    answer: "Um protótipo é uma versão inicial do seu site, que permite visualizar e testar a estrutura, design e funcionalidades antes do lançamento oficial.",
  },
  {
    question: "Como contratar o serviço?",
    answer: "Contratar é simples! Preencha o formulário de contato e nossa equipe entrará em contato com você.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/lovable-uploads/376b94c7-40ff-445e-8442-9c99117a597c.png"
          alt="Background Illustration"
          className="absolute top-1/4 right-0 w-1/3 opacity-10 transform rotate-180"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="/lovable-uploads/b421e3df-a663-4c1a-b7bc-7918f32773b9.png"
          alt="Background Illustration"
          className="absolute bottom-0 left-0 w-1/3 opacity-10 transform -rotate-45"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            Perguntas Frequentes
          </h2>
          <p className="text-blue-600 max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border rounded-lg bg-white shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left text-blue-900 hover:text-blue-700 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-blue-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};