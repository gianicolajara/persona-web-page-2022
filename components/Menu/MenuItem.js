import Link from "next/link";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { desktop, mobile } from "../../config/devices";
import { DeviceContext } from "../../contexts/devices.context";
import MenuArrow from "./MenuArrow";

const MenuItem = ({
  item,
  index = 1,
  open = false,
  handleOpenMenu = () => {},
}) => {
  const { device } = useContext(DeviceContext);
  const [selected, setSelected] = useState(false);

  const variantsItem = {
    initial: {
      opacity: 1,
      x: 0,
    },
    animate: {
      opacity: 1,
      x: 15,
    },
  };

  const variantsList = {
    initial: {
      opacity: 0,
      x: desktop(device) ? -15 : 0,
      y: mobile(device) ? 15 : 0,
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
      x: desktop(device) ? -15 : 0,
      y: mobile(device) ? 15 : 0,
    },
  };

  return (
    <div className="flex items-center justify-center lg:justify-start">
      <MenuArrow selected={selected} />
      <AnimatePresence>
        {open && (
          <motion.li
            key={item.key}
            variants={variantsList}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex justify-center items-center "
            onMouseEnter={() => setSelected(true)}
            onMouseLeave={() => setSelected(false)}
          >
            <Link href={item.href} passHref={true}>
              <motion.a
                onClick={handleOpenMenu}
                variants={variantsItem}
                initial="initial"
                animate={desktop(device) && selected ? "animate" : "initial"}
                className="px-2 py-1 hover:bg-gray-300/70 text-gray-400 dark:text-dark-extralight font-medium hover:text-gray-700 rounded-lg dark:hover:text-sky-500 dark:hover:bg-dark-light flex justify-center items-center w-max text-4xl"
              >
                {item.title}
              </motion.a>
            </Link>
          </motion.li>
        )}
      </AnimatePresence>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    key: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number,
  open: PropTypes.bool,
  handleOpenMenu: PropTypes.func,
};

export default MenuItem;
