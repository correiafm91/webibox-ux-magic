import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const stats = [
  { value: 150, label: "Projetos Entregues" },
  { value: 98, label: "Clientes Satisfeitos" },
  { value: 5, label: "Anos de Experiência" },
];

export const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-blue-100/20 shadow-xl"
            >
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {inView ? (
                  <Counter from={0} to={stat.value} duration={2} />
                ) : (
                  "0"
                )}
                {index === 1 && "%"}
              </div>
              <p className="text-blue-600/80 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ from, to, duration }: { from: number; to: number; duration: number }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const steps = 60;
    const increment = (to - from) / steps;
    const interval = duration * 1000 / steps;

    let current = from;
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [from, to, duration]);

  return <>{count}</>;
};