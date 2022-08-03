import { motion } from "framer-motion";
import Title from "../Title";
import Subtitle from "../Subtitle";
import Icon from "../Icon";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useContext } from "react";
import { DeviceContext } from "../../contexts/devices.context";
import { mobile } from "../../config/devices";
import HeroeSkills from "./HeroeSkills";

const HeroeInformation = () => {
  const { device } = useContext(DeviceContext);

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
    <div
      className={`flex flex-col justify-center items-center text-center gap-5  ${
        mobile(device) &&
        "bg-[url('/images/heroe.jpg')] bg-center bg-cover h-[calc(100vh-65px)]"
      }`}
    >
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        className="bg-gray-100/95 dark:bg-dark-hard/90 px-4 py-5 flex flex-col justify-center items-center gap-4 rounded-md flex-initial lg:flex-1 mx-5 lg:mx-0"
      >
        <div className="flex flex-col justify-center items-center">
          <Title bold>
            Hi, I am <span className="text-sky-500">Gianicola</span>
          </Title>
          <Subtitle>Web Developer</Subtitle>
        </div>

        <div className="flex gap-3">
          <Icon>
            <a
              href="https://github.com/gianicolajara"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={20} />
            </a>
          </Icon>
          <Icon>
            <a
              href="https://www.linkedin.com/in/gianicola-jara-panichella-0451a2170/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin size={20} />
            </a>
          </Icon>
        </div>
        <HeroeSkills />
      </motion.div>
    </div>
  );
};

export default HeroeInformation;
