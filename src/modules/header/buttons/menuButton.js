import { MenuPage } from "../../menu";

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

const displayMenuPage = (event) => {
  const mainContainer = document.querySelector("#content");
  mainContainer.innerText = "";
  mainContainer.appendChild(MenuPage());
}

export {
  addMenuButton
};