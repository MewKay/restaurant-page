import { createHeader } from "./header/header";
import { addHomeButton } from "./header/buttons/homeButton";
import { addMenuButton } from "./header/buttons/menuButton";

const ContactPage = () => {
  const contactContainer = document.createElement("div");
  contactContainer.id = "contact";

  const contactHeader = createContactHeader(); 
  const contactInfos = createContactInfos();

  contactContainer.appendChild(contactHeader.get());
  contactContainer.appendChild(contactInfos);
  
  return contactContainer;
}

const createContactHeader = () => {
  const contactHeader = createHeader();

  addHomeButton(contactHeader);
  addMenuButton(contactHeader);

  return contactHeader;
}

const createContactInfos = () => {
  const contactInfosContainer = document.createElement("div");
  contactInfosContainer.id = "contact-infos";

  return contactInfosContainer;
}

export {
  ContactPage
};