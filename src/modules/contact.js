import { createHeader } from "./header/header";
import { addHomeButton } from "./header/buttons/homeButton";
import { addMenuButton } from "./header/buttons/menuButton";

const ContactPage = () => {
  const contactContainer = document.createElement("div");
  contactContainer.id = "contact";

  const contactHeader = createContactHeader(); 
  const contactContent = createContactContent();

  contactContainer.appendChild(contactHeader.get());
  contactContainer.appendChild(contactContent);
  
  return contactContainer;
}

const createContactHeader = () => {
  const contactHeader = createHeader();

  addHomeButton(contactHeader);
  addMenuButton(contactHeader);

  return contactHeader;
}

const createContactContent = () => {
  const contactContent = document.createElement("div");
  contactContent.id = "contact-content";

  return contactContent;
}

export {
  ContactPage
};