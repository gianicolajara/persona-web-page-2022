import { motion } from "framer-motion";
import Icon from "../Icon";
import PropTypes from "prop-types";

const SpinerProject = ({ projectSelected }) => {
  const variants = {
    initial: {
      border: "none",
    },
    animate_in: {
      rotate: -2520,
      opacity: 1,
      border: [
        "1px solid #38BDF8",
        "1px solid #F83838",
        "1px solid #38BDF8",
        "1px solid #38BDF8",
      ],
      borderLeftColor: ["#1F1F1F", "#1F1F1F", "#38BDF8", "#38BDF8"],
      borderRightColor: ["#1F1F1F", "#1F1F1F", "#38BDF8", "#38BDF8"],
      boxShadow: [
        "0px 0px 0px rgba(56, 189, 248)",
        "0px 0px 0px rgba(56, 189, 248)",
        "0px 0px 0px rgba(56, 189, 248)",
        "0px 0px 10px rgba(56, 189, 248)",
      ],
    },
    exit: {
      rotate: 0,
      opacity: 0,
      border: "none",
    },
  };
  return (
    <div className="flex-1 flex items-center">
      <motion.div
        key={projectSelected?.key || ""}
        variants={variants}
        initial="initial"
        animate="animate_in"
        exit="exit"
        transition={{
          times: [0, 0.3, 0.8, 1],
          duration: 3,
          type: "spring",
          repeat: 0,
        }}
        className="w-[170px] h-[170px] rounded-full bg-dark-hard border-sky-400 flex justify-center items-center"
      >
        <Icon>
          <span className="text-5xl text-sky-500">
            {projectSelected?.icon || ""}
          </span>
        </Icon>
      </motion.div>
    </div>
  );
};

SpinerProject.propTypes = {
  projectSelected: PropTypes.object,
};

export default SpinerProject;
