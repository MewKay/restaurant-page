import "./reset.css";
import "./style.css";
import { Homepage } from "./home.js";

const displayPage = () => {
  const container = document.querySelector("#content");

  container.appendChild(Homepage());
}

displayPage();