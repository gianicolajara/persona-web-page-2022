import { motion } from "framer-motion";
import Button from "../Button";
import Image from "next/image";
import PropTypes from "prop-types";

import Link from "next/link";

const ShowProject = ({ projectSelected }) => {
  const variantsImage = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  const variantsButton = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
    whileHover: {
      scale: [1, 1.2, 1],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        times: [0, 0.3, 0.8, 1],
      },
    },
  };

  return (
    <div className="flex-1 w-full h-full">
      <motion.div
        key={projectSelected.key}
        variants={variantsImage}
        initial="initial"
        animate="animate"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 10px rgba(56, 189, 248)",
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="w-full min-h-[175px] h-full relative shadow cursor-pointer flex justify-center items-center"
      >
        <motion.div
          key={projectSelected.key}
          variants={variantsButton}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          className="absolute z-50"
        >
          <Link href={projectSelected.url} passHref>
            <a target="_blank" rel="norreferer">
              <Button>Ver Proyecto</Button>
            </a>
          </Link>
        </motion.div>
        <Image
          src={projectSelected.image}
          layout="fill"
          alt="project"
          objectFit="cover"
        />
      </motion.div>
    </div>
  );
};

ShowProject.propTypes = {
  projectSelected: PropTypes.object,
};

export default ShowProject;
