import { createHeader } from "./header/header";
import { addContactButton } from "./header/buttons/contactButton";
import { addHomeButton } from "./header/buttons/homeButton";

const MenuPage = () => {
  const menuContainer = document.createElement("div");
  menuContainer.id = "menu";

  const menuHeader = createMenuHeader(); 

  menuContainer.appendChild(menuHeader.get());
  
  return menuContainer;
}

const createMenuHeader = () => {
  const menuHeader = createHeader();

  addHomeButton(menuHeader);
  addContactButton(menuHeader);

  return menuHeader;
}

export {
  MenuPage
};