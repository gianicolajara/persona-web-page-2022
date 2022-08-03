import Image from "next/image";
import { useContext } from "react";
import { DeviceContext } from "../../contexts/devices.context";
import { motion } from "framer-motion";

const HeroeImage = () => {
  const { device } = useContext(DeviceContext);

  const variants = {
    initial: {
      opacity: 0,
      x: 100,
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
        delay: 0.5,
        ease: "easeInOut",
      }}
      className="relative hidden lg:flex"
    >
      <Image
        src="/images/heroe.jpg"
        alt="heroe"
        objectFit="cover"
        layout="fill"
      />
    </motion.div>
  );
};

export default HeroeImage;
