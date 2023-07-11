const addBrandName = (container) => {    
  const brandName = document.createElement("h1");
  brandName.innerText = "My Pizzeria";
  brandName.classList.add("brand-name");
  container.appendChild(brandName);
}

const addSectionButton = (container) => {
  const sectionButton = document.createElement("div");
  sectionButton.classList.add("btn-section");
  container.appendChild(container);
  return sectionButton;
}

const createHeader = () => {
  const headerContainer = document.createElement("header");
  const sectionButton = addSectionButton(headerContainer);

  addBrandName(headerContainer);

  const get = () => headerContainer;

  return {
    get
  };
}

export {
  createHeader
}