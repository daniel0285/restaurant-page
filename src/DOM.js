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

  if (navBtn.includes(target)) {
    currentDomContent = target;
    main.textContent = currentDomContent;
    console.log(currentDomContent);
    renderHomeContent();
  }
}

export { changeDomContent, greeting };
