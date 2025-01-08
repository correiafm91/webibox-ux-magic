import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o processo de criação?",
    answer: "Nosso processo começa com uma consulta detalhada para entender suas necessidades. Em seguida, desenvolvemos protótipos, refinamos o design e implementamos sua solução digital.",
  },
  {
    question: "Quanto tempo leva para criar um site?",
    answer: "O tempo de desenvolvimento varia conforme a complexidade do projeto, mas geralmente entregamos sites completos em 4-6 semanas.",
  },
  {
    question: "Vocês oferecem suporte após o lançamento?",
    answer: "Sim, oferecemos suporte técnico contínuo e manutenção para garantir que seu site continue funcionando perfeitamente.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};