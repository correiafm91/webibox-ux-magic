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
    <section ref={ref} className="py-24 bg-primary text-white">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {inView ? (
                  <Counter from={0} to={stat.value} duration={2} />
                ) : (
                  "0"
                )}
                {index === 1 && "%"}
              </div>
              <p className="text-primary-foreground/80">{stat.label}</p>
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