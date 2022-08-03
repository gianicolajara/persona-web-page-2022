import React from "react";
import { workList } from "../../config/study.config";
import Subtitle from "../Subtitle";
import WorkItem from "./WorkItem";
import { motion } from "framer-motion";

const WorksInfo = () => {
  const variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{
        once: true,
        amount: "some",
      }}
      className="flex-1 bg-gray-200 dark:bg-dark-normal p-5 rounded-lg shadow"
    >
      <div className="mb-5">
        <Subtitle line bold>
          Trabajos
        </Subtitle>
      </div>

      <ul className="w-full">
        {workList.map(({ key, title, date, description, link, titleLink }) => (
          <WorkItem
            key={key}
            title={title}
            description={description}
            date={date}
            link={link}
            titleLink={titleLink}
          />
        ))}
      </ul>
    </motion.div>
  );
};

export default WorksInfo;
