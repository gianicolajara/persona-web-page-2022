import Section from "../Section";
import Wrapper from "../Wrapper";
import { motion } from "framer-motion";
import { useState } from "react";
import HeaderProject from "./HeaderProject";
import { typesProjectsList } from "../../config/project.config";
import SpinerProject from "./SpinerProject";
import ShowProject from "./ShowProject";
import TitleProject from "./TitleProject";

const Projects = () => {
  const [projectSelected, setProjectSelected] = useState(typesProjectsList[0]);

  const handleChangeAnimation = (project) => {
    setProjectSelected(project);
  };

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
    <Section light>
      <Wrapper anchor="projects" last>
        <TitleProject />
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{
            once: true,
            amount: "some",
          }}
          className="flex lg:flex-row flex-col items-center gap-5 lg:gap-0"
        >
          <HeaderProject
            handleChangeAnimation={handleChangeAnimation}
            projectSelected={projectSelected}
          />
          <SpinerProject projectSelected={projectSelected} />
          <ShowProject projectSelected={projectSelected} />
        </motion.div>
      </Wrapper>
    </Section>
  );
};

export default Projects;
