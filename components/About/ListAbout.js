import React from "react";
import { aboutDataList } from "../../config/about.config";
import MiniCardWithTitle from "../MiniCard/MiniCardWithTitle";
import Subtitle from "../Subtitle";
import { motion } from "framer-motion";

const ListAbout = () => {
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
      whileInView="animate"
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{
        once: true,
        amount: "some",
      }}
    >
      <div className="mb-5">
        <Subtitle bold line>
          Mis Datos
        </Subtitle>
      </div>
      <ul className="flex flex-wrap gap-3">
        {aboutDataList.map((item, index) => (
          <MiniCardWithTitle
            key={item.key}
            title={item.title}
            body={item.body}
            index={index}
          />
        ))}
      </ul>
    </motion.div>
  );
};

export default ListAbout;
