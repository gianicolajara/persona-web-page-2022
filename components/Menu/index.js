import { menuItemsArray } from "../../config/menu.config";
import MenuList from "./MenuList";
import MenuDarkMode from "./MenuDarkMode";
import MenuHamburguer from "./MenuHamburguer";
import { useEffect, useState } from "react";
import MenuBrand from "./MenuBrand";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <nav
      className="w-full h-[65px] bg-gray-100 dark:bg-dark-hard 
    top-0 left-0 fixed px-10  z-[9999999]"
    >
      <div className="flex w-full h-full justify-between items-center">
        <MenuBrand />
        <div className="flex items-center gap-3 ">
          <MenuDarkMode />
          <MenuList
            menuItemsArray={menuItemsArray}
            open={open}
            handleOpenMenu={handleOpenMenu}
          />
          <MenuHamburguer open={open} handleOpenMenu={handleOpenMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
