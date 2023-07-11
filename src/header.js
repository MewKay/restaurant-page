const addBrandName = (container) => {    
  const brandName = document.createElement("h1");
  brandName.innerText = "My Pizzeria";
  brandName.classList.add("brand-name");
  container.appendChild(brandName);
}

const addSectionButton = (container) => {
  const sectionButton = document.createElement("div");
  sectionButton.classList.add("btn-section");
  container.appendChild(sectionButton);
  return sectionButton;
}

const createHeader = () => {
  const headerContainer = document.createElement("header");
  addBrandName(headerContainer);

  const sectionButton = addSectionButton(headerContainer);

  const get = () => headerContainer;

  const getSectionButton = () => sectionButton;

  return {
    get,
    getSectionButton
  };
}

export {
  createHeader
}