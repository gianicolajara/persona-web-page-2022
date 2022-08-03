import { AiFillGithub } from "react-icons/ai";
import Icon from "../Icon";
import P from "../P";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { DeviceContext } from "../../contexts/devices.context";
import { useContext } from "react";
import { desktop, mobile } from "../../config/devices";

const MenuAddress = ({ open = false }) => {
  const { device } = useContext(DeviceContext);

  const variants = {
    initial: {
      opacity: 0,
      x: desktop(device) ? 15 : 0,
      y: mobile(device) ? -15 : 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.7,
      },
    },
    exit: {
      opacity: 0,
      x: desktop(device) ? 15 : 0,
      y: mobile(device) ? -15 : 0,
    },
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="address"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="lg:flex-1 flex justify-center items-end"
          >
            <div className="text-center">
              <P bold>Gianicola Jara Panichella</P>
              <P>gianicolajara@gmail.com</P>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

MenuAddress.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default MenuAddress;
