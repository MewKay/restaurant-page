import { Homepage } from "./home";

const createHomeButton = () => {
  const homeButton = document.createElement("button");
  homeButton.classList.add("btn-home");
  homeButton.innerText = "Return Home";
  homeButton.addEventListener("click", displayHomePage);
  return homeButton;
}

const addHomeButton = (headerContainer) => {
  headerContainer.getSectionButton().appendChild(createHomeButton());
  return headerContainer;
}

const displayHomePage = () => {
  const mainContainer = document.querySelector("#content");
  mainContainer.innerText = "";
  mainContainer.appendChild(Homepage());
}

export {
  addHomeButton
};