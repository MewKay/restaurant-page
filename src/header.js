const addBrandName = (container) => {    
  const brandName = document.createElement("h1");
  brandName.innerText = "My Pizzeria";
  brandName.classList.add("brand-name");
  container.appendChild(brandName);
}

const addButtonsSection = (container) => {
  const buttonsSection = document.createElement("div");
  buttonsSection.classList.add("btn-section");
  const menuButton = document.createElement("button");
  const contactButton = document.createElement("button");
  menuButton.classList.add("btn-menu");
  menuButton.innerText = "Menu";
  buttonsSection.appendChild(menuButton);
  contactButton.classList.add("btn-contact");
  contactButton.innerText = "Contact";
  buttonsSection.appendChild(contactButton);
  container.appendChild(buttonsSection);
}

const createHeader = () => {
  const headerContainer = document.createElement("header");

  addBrandName(headerContainer);
  addButtonsSection(headerContainer);

  const get = () => headerContainer;

  return {
    get
  };
}

export {
  createHeader
}