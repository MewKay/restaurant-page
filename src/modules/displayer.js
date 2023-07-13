import { Homepage } from "./home";
import { MenuPage } from "./menu";
import { ContactPage } from "./contact";


const displayHomePage = () => {
  const mainContainer = document.querySelector("#content");
  mainContainer.innerText = "";
  mainContainer.appendChild(Homepage());
}

const displayMenuPage = () => {
  const mainContainer = document.querySelector("#content");
  mainContainer.innerText = "";
  mainContainer.appendChild(MenuPage());
}

const displayContactPage = () => {
  const mainContainer = document.querySelector("#content");
  mainContainer.innerText = "";
  mainContainer.appendChild(ContactPage());
}

export {
  displayHomePage,
  displayMenuPage,
  displayContactPage
};