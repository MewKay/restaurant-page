import { createHeader } from "./header/header";
import { addHomeButton } from "./header/buttons/homeButton";
import { addMenuButton } from "./header/buttons/menuButton";

const ContactPage = () => {
  const contactContainer = document.createElement("div");
  contactContainer.id = "contact";

  const contactHeader = createContactHeader(); 

  contactContainer.appendChild(contactHeader.get());
  
  return contactContainer;
}

const createContactHeader = () => {
  const contactHeader = createHeader();

  addHomeButton(contactHeader);
  addMenuButton(contactHeader);

  return contactHeader;
}

export {
  ContactPage
};