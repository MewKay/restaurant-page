import { displayHomePage } from "../../displayer";

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

export {
  addHomeButton
};