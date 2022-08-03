import Subtitle from "../Subtitle";
import { motion } from "framer-motion";

const MenuBrand = () => {
  const variants = {
    initial: {
      opacity: 0,
      x: -50,
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
      animate="animate"
      transition={{
        duration: 0.5,
      }}
    >
      <Subtitle>Gianicola</Subtitle>
    </motion.div>
  );
};

export default MenuBrand;
