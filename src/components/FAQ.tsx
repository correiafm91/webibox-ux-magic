import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o processo de criação do site?",
    answer: "Iniciamos com uma análise detalhada do seu negócio, criamos protótipos para sua aprovação e desenvolvemos seu site com atualizações constantes durante o processo.",
  },
  {
    question: "Quanto tempo leva para criar um site personalizado?",
    answer: "O prazo varia de acordo com a complexidade do projeto, mas geralmente entregamos sites completos em 4-6 semanas.",
  },
  {
    question: "Como posso personalizar meu site?",
    answer: "Oferecemos personalização completa, desde o design até as funcionalidades. Adaptamos cada elemento para refletir sua marca e atender suas necessidades específicas.",
  },
  {
    question: "Como contratar os serviços da Webibox?",
    answer: "Entre em contato conosco através do formulário no site ou por telefone. Faremos uma reunião inicial para entender suas necessidades e apresentar a melhor solução.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
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
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border-blue-200">
                  <AccordionTrigger className="text-left text-blue-900 hover:text-blue-700">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-blue-600">
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