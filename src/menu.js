import { createHeader } from "./header";
import { addContactButton } from "./contactButton";

const MenuPage = () => {
  const menuContainer = document.createElement("div");
  menuContainer.id = "menu";

  const menuHeader = createMenuHeader(); 

  menuContainer.appendChild(menuHeader.get());
  
  return menuContainer;
}

const createMenuHeader = () => {
  const menuHeader = createHeader();

  addContactButton(menuHeader);

  return menuHeader;
}

export {
  MenuPage
};