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

  const createContactInfos = (() => {
    const contactInfoContainer = document.createElement("div");
    contactInfoContainer.id = "contact-info";

    const phoneNumberSection = document.createElement("section");
    const phoneNumberSectionTitle = document.createElement("h2");
    phoneNumberSectionTitle.innerText = "Phone Number";
    const phoneNumber = document.createElement("p");
    phoneNumber.innerText = "XXX-XXX-XXXX";
    phoneNumberSection.appendChild(phoneNumberSectionTitle);
    phoneNumberSection.appendChild(phoneNumber);

    const addressSection = document.createElement("section");
    const addressSectionTitle = document.createElement("h2");
    addressSectionTitle.innerText = "Address";
    const addressName = document.createElement("p");
    addressName.innerText = "Somewhere-that-smells-good Boulevard";
    addressSection.appendChild(addressSectionTitle);
    addressSection.appendChild(addressName);

    contactInfoContainer.appendChild(phoneNumberSection);
    contactInfoContainer.appendChild(addressSection);
    
    contactContent.appendChild(contactInfoContainer);
  })();

  return contactContent;
}

export {
  ContactPage
};