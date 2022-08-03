import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme.context";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Icon from "../Icon";
import { themaTypes } from "../../config/theme.config";
import { motion } from "framer-motion";

const MenuDarkMode = () => {
  const { theme, handleToggleThemeMode } = useContext(ThemeContext);

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
      {theme === themaTypes.dark ? (
        <motion.div
          key="light"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Icon>
            <MdLightMode onClick={handleToggleThemeMode} size={25} />
          </Icon>
        </motion.div>
      ) : (
        <motion.div
          key="dark"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Icon>
            <MdDarkMode onClick={handleToggleThemeMode} size={25} />
          </Icon>
        </motion.div>
      )}
    </>
  );
};

export default MenuDarkMode;
