import { createHeader } from "./header";
import { addContactButton } from "./contactButton";
import { addHomeButton } from "./homeButton";

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