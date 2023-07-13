import { displayMenuPage } from "../../displayer";

const createMenuButton = () => {
  const menuButton = document.createElement("button");
  menuButton.classList.add("btn-menu");
  menuButton.innerText = "Menu";
  menuButton.addEventListener("click", displayMenuPage);
  return menuButton;
}

const addMenuButton = (headerContainer) => {
  headerContainer.getSectionButton().appendChild(createMenuButton());
  return headerContainer;
}

export {
  addMenuButton
};