const createContactButton = () => {
  const menuButton = document.createElement("button");
  menuButton.classList.add("btn-contact");
  menuButton.innerText = "Contact";
  return menuButton;
}

const addContactButton = (headerContainer) => {
  headerContainer.getSectionButton().appendChild(createContactButton());
  return headerContainer;
}

export {
  addContactButton
};