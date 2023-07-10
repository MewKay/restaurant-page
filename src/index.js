import "./reset.css";
import "./style.css";
import { Homepage } from "./home.js";
import { MenuPage } from "./menu";

const displayPage = () => {
  const container = document.querySelector("#content");

  container.appendChild(Homepage());
}

displayPage();