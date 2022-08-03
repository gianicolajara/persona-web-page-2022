import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Icon from "../Icon";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const MenuHamburguer = ({ handleOpenMenu = () => {}, open = false }) => {
  const variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      {open ? (
        <motion.div
          key="close"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Icon onClick={handleOpenMenu}>
            <AiOutlineClose size={23} />
          </Icon>
        </motion.div>
      ) : (
        <motion.div
          key="open"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Icon onClick={handleOpenMenu}>
            <AiOutlineMenu size={23} />
          </Icon>
        </motion.div>
      )}
    </>
  );
};

MenuHamburguer.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MenuHamburguer;
