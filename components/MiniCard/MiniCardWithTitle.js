import PropTypes from "prop-types";
import P from "../P";
import { motion } from "framer-motion";

const MiniCardWithTitle = ({
  title = "",
  body = "",
  light = false,
  index = null,
}) => {
  const variants = {
    initial: {
      opacity: 0,
      y: -70,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      key={index}
      variants={variants}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      viewport={{
        once: true,
        amount: "some",
      }}
      className={`flex gap-1 py-1 dark:${
        light ? "bg-dark-light" : "bg-dark-hard"
      } border-0 w-max px-3 rounded-lg shadow bg-dark-hardlight`}
    >
      <P bold>{title}:</P>
      <P>{body}</P>
    </motion.div>
  );
};

MiniCardWithTitle.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  light: PropTypes.bool,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

export default MiniCardWithTitle;
