const greeting = "Hello Odin";
const main = document.getElementById("content");
let currentDomContent;

// function createElement(elementType, elementID, elementClass) {
//   const element = document.createElement(elementType);

//   if (elementID) {
//     element.id = elementID;
//   }

//   if (elementClass) {
//     element.classList.add(elementClass);
//   }
//   return element;
// }

function changeDomContent(target) {
  const navBtn = ["home", "menu", "about"];

  if (target === currentDomContent) return;

  if (target === "home") {
    currentDomContent = target;
    renderHomeContent();
  } else if (target === "menu") {
    currentDomContent = target;
    renderMenuContent();
  } else if (target === "about") {
    currentDomContent = target;
    renderAboutContent();
  }
}

function renderHomeContent() {
  main.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const header = document.createElement("h2");
  header.textContent = "home text here";

  const description = document.createElement("p");
  description.textContent = "home description here";

  fragment.append(header, description);
  main.append(fragment);
}

function renderMenuContent() {
  main.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const header = document.createElement("h2");
  header.textContent = "menu text here";

  const description = document.createElement("p");
  description.textContent = "menu description here";

  fragment.append(header, description);
  main.append(fragment);
}

function renderAboutContent() {
  main.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const header = document.createElement("h2");
  header.textContent = "about text here";

  const description = document.createElement("p");
  description.textContent = "about description here";

  fragment.append(header, description);
  main.append(fragment);
}

export { changeDomContent, greeting };
