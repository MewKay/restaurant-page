import { createHeader } from "./header/header.js";
import { addMenuButton } from "./header/buttons/menuButton.js";
import { addContactButton } from "./header/buttons/contactButton.js";

const Homepage = () => {
  const homeContainer = document.createElement("div");
  homeContainer.id = "home";

  const homeHeader = createHomeHeader();
  const presentation = createPresentation();
  const credits = createCredits();

  homeContainer.appendChild(homeHeader.get());
  homeContainer.appendChild(presentation);
  homeContainer.appendChild(credits);

  return homeContainer;
}

const createHomeHeader = () => {
  const homeHeader = createHeader();

  addMenuButton(homeHeader);
  addContactButton(homeHeader);

  return homeHeader;
}

const createPresentation = () => {
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

const createCredits = () => {
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