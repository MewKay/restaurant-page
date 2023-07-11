import { createHeader } from "./header";
import { addMenuButton } from "./menuButton";

const ContactPage = () => {
  const contactContainer = document.createElement("div");
  contactContainer.id = "contact";

  const contactHeader = createContactHeader(); 

  contactContainer.appendChild(contactHeader.get());
  
  return contactContainer;
}

const createContactHeader = () => {
  const contactHeader = createHeader();

  addMenuButton(contactHeader);

  return contactHeader;
}

export {
  ContactPage
};