import P from "../P";
import Small from "../Small";
import Title from "../Title";
import { motion } from "framer-motion";

const InformationAbout = () => {
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
      <div className="mb-5">
        <Small>
          <span className="tracking-[.6em]">Un Poco</span>
        </Small>
        <Title bold line>
          Sobre Mi
        </Title>
      </div>
      <P>
        Soy un desarrollador web, me encanta crear hermosas páginas y
        aplicaciones con Next.js, también uso Mongodb para almacenar mis datos y
        uso TailwindCSS para el estilo.
      </P>
    </motion.div>
  );
};

export default InformationAbout;
