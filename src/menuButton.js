const createMenuButton = () => {
  const menuButton = document.createElement("button");
  menuButton.classList.add("btn-menu");
  menuButton.innerText = "Menu";
  return menuButton;
}

const addMenuButton = (headerContainer) => {
  headerContainer.getSectionButton().appendChild(createMenuButton());
  return container;
}

export {
  addMenuButton
};