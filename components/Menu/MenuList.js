import PropTypes from "prop-types";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";
import MenuAddress from "./MenuAddress";

const MenuList = ({ menuItemsArray, open, handleOpenMenu = () => {} }) => {
  const variants = {
    open: {
      top: 65,
    },
    close: {
      top: "-100vh",
    },
  };

  return (
    <motion.ul
      variants={variants}
      initial="close"
      animate={open ? "open" : "close"}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className="absolute top-[65px] w-full dark:bg-dark-hard  bg-gray-100 p-3 h-[calc(100vh-65px)] left-0 -z-10"
    >
      <div className="w-full h-full max-w-[999px] m-auto flex lg:justify-between justify-center items-center flex-col lg:flex-row">
        <div className="flex-1 flex flex-col justify-center lg:justify-end">
          {menuItemsArray.map((item, index) => (
            <MenuItem
              item={item}
              key={item.key}
              index={index + 1}
              open={open}
              handleOpenMenu={handleOpenMenu}
            />
          ))}
        </div>
        <MenuAddress open={open} />
      </div>
    </motion.ul>
  );
};

MenuList.propTypes = {
  menuItemsArray: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  handleOpenMenu: PropTypes.func,
};

export default MenuList;
