import Small from "../Small";
import Title from "../Title";
import { motion } from "framer-motion";

const TitleProject = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{
        once: true,
        amount: "some",
      }}
      className="mb-5"
    >
      <Small>
        <span className="tracking-[.6em]">Inventos</span>
      </Small>
      <Title bold line>
        Proyectos
      </Title>
    </motion.div>
  );
};

export default TitleProject;
