const Header = () => {
  const headerContainer = document.createElement("header");
  
  const addBrandName = () => {    
    const brandName = document.createElement("h1");
    brandName.innerText = "My Pizzeria";
    brandName.classList.add("brand-name");
    headerContainer.appendChild(brandName);
  }
  
  const addButtonsSection = () => {
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
    headerContainer.appendChild(buttonsSection);
  }

  addBrandName();
  addButtonsSection();

  return headerContainer;
}

export {
  Header
}