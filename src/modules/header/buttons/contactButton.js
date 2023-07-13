import { displayContactPage } from "../../displayer";

const createContactButton = () => {
  const contactButton = document.createElement("button");
  contactButton.classList.add("btn-contact");
  contactButton.innerText = "Contact";
  contactButton.addEventListener("click", displayContactPage);
  return contactButton;
}

const addContactButton = (headerContainer) => {
  headerContainer.getSectionButton().appendChild(createContactButton());
  return headerContainer;
}

export {
  addContactButton
};