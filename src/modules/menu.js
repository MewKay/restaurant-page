import { createHeader } from "./header/header";
import { addContactButton } from "./header/buttons/contactButton";
import { addHomeButton } from "./header/buttons/homeButton";

const MenuPage = () => {
  const menuContainer = document.createElement("div");
  menuContainer.id = "menu";

  const menuHeader = createMenuHeader(); 
  const menuListContainer = createMenuListContainer();

  menuContainer.appendChild(menuHeader.get());
  menuContainer.appendChild(menuListContainer);
  
  return menuContainer;
}

const createMenuHeader = () => {
  const menuHeader = createHeader();

  addHomeButton(menuHeader);
  addContactButton(menuHeader);

  return menuHeader;
}

const createMenuListContainer = () => {
  const menuListContainer = document.createElement("div");
  menuListContainer.id = "menu-list-container";
  const menuList = createMenuList();
  menuListContainer.appendChild(menuList);

  return menuListContainer;
}

const createMenuList = () => {
  const menuList = document.createElement("div");
  menuList.id = "menu-list";

  return menuList;
}

export {
  MenuPage
};