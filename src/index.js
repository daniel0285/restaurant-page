import { changeDomContent } from "./DOM.js";
import { renderHomeContent } from "./home";
import "./styles.css";

document.body.addEventListener("click", clickHandler);
document.addEventListener("DOMContentLoaded", renderHomeContent);

function clickHandler(e) {
  if (e.target.className === "nav-btn") {
    const buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach((elem) => elem.classList.remove("target"));
    e.target.classList.add("target");
    changeDomContent(e.target.id);
  }
}
