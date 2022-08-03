import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { desktop } from "../../config/devices";
import { DeviceContext } from "../../contexts/devices.context";
import PropTypes from "prop-types";

const MenuArrow = ({ selected }) => {
  const { device } = useContext(DeviceContext);

  const variants = {
    initial: {
      opacity: 1,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: -25,
    },
    exit: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <>
      {desktop(device) && (
        <AnimatePresence>
          {selected && (
            <motion.div
              variants={variants}
              initial="initial"
              exit="exit"
              animate="animate"
              className="absolute"
            >
              <BiRightArrowAlt size={25} className="text-sky-500" />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

MenuArrow.propTypes = {
  selected: PropTypes.bool.isRequired,
};

export default MenuArrow;
