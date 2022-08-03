import P from "../P";
import Small from "../Small";
import Title from "../Title";
import { motion } from "framer-motion";

const WorkHead = () => {
  const variants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      className="mb-5"
      variants={variants}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{
        once: true,
        amount: "some",
      }}
    >
      <div className="mb-5">
        <Small>
          <span className="tracking-[.6em]">Experiencia</span>
        </Small>
        <Title bold line>
          Estudios y trabajos
        </Title>
      </div>
      <P>
        Estudie Tecnico Superior Informatico y aprendí de forma autodidacta
        mucha de las cosas que aplico al desarrollo web y movil, mis tecnologias
        favoritas son React, Next.js, Node.js y MongoDB.
      </P>
    </motion.div>
  );
};

export default WorkHead;
