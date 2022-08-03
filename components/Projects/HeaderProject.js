import { typesProjectsList } from "../../config/project.config";
import Icon from "../Icon";
import P from "../P";
import Small from "../Small";
import Title from "../Title";
import PropTypes from "prop-types";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import MiniCard from "../MiniCard";

const HeaderProject = ({
  handleChangeAnimation = () => {},
  projectSelected,
}) => {
  const variantsArrow = {
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
    <div className="flex-1 flex items-center">
      <div>
        <ul>
          {typesProjectsList.map((project) => (
            <li key={project.key} className="flex items-center">
              {projectSelected.title === project.title && (
                <motion.div
                  key={project.key}
                  variants={variantsArrow}
                  initial="initial"
                  animate="animate"
                >
                  <Icon>
                    <BiRightArrowAlt size={25} className="text-sky-500" />
                  </Icon>
                </motion.div>
              )}
              <motion.div
                animate={{
                  x: projectSelected.title === project.title ? 5 : 0,
                }}
                className="flex flex-col"
              >
                <div
                  className="flex gap-2 items-center cursor-pointer"
                  onClick={() => handleChangeAnimation(project)}
                >
                  <Icon active={projectSelected.title === project.title}>
                    {project.icon}
                  </Icon>
                  <P active={projectSelected.title === project.title}>
                    {project.title}
                  </P>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

HeaderProject.propTypes = {
  handleChangeAnimation: PropTypes.func,
  projectSelected: PropTypes.object,
};

export default HeaderProject;
