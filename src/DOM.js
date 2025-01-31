import { renderHomeContent } from "./home";
import { renderMenuContent } from "./menu";
import { renderAboutContent } from "./about";

const main = document.getElementById("content");
let currentDomContent = "home";

function changeDomContent(target) {
  if (target === currentDomContent) return;

  currentDomContent = target;

  if (target === "home") {
    renderHomeContent();
  } else if (target === "menu") {
    renderMenuContent();
  } else if (target === "about") {
    renderAboutContent();
  }
}

export { changeDomContent };
