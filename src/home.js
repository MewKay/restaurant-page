const Homepage = () => {
  const homeContainer = document.createElement("div");
  homeContainer.id = "home";

  homeContainer.appendChild(Header());
  homeContainer.appendChild(Presentation());
  homeContainer.appendChild(Credits());

  return homeContainer;
}

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

const Presentation = () => {
  const presentationContainer = document.createElement("div");
  presentationContainer.classList.add("presentation");
  
  const addHomeTitle = () => {
    const homeTitle = document.createElement("h1");
    homeTitle.classList.add("homepage-title");
    homeTitle.innerText = "Welcome to our pizzeria, where each slice is a delicious journey of flavors!";
    presentationContainer.appendChild(homeTitle);
  }

  const addHomeDescription = () => {
    const homeDescription = document.createElement("p");
    homeDescription.classList.add("description");
    homeDescription.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo itaque aut ipsam. Ab quo architecto neque illum voluptatibus, porro voluptas harum possimus ipsa. Hic magnam eius accusantium fugit? Quae, laudantium?";
    presentationContainer.appendChild(homeDescription);
  }

  addHomeTitle();
  addHomeDescription();

  return presentationContainer;
}

const Credits = () => {
  const creditsContainer = document.createElement("div");
  creditsContainer.classList.add("credits");

  const addPhotoLink = () => {
    const text = document.createElement("p");
    const photoLink = document.createElement("a");

    text.innerText = "Photo By ";
    photoLink.href = "https://www.pexels.com/fr-fr/photo/nourriture-pizza-table-en-bois-delicieux-5903312/";
    photoLink.innerText = "ROMAN ODINTSOV";

    creditsContainer.appendChild(text);
    text.appendChild(photoLink);
  }

  addPhotoLink();

  return creditsContainer;
}

export {
  Homepage
};