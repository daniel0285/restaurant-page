export function renderAboutContent() {
  main.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const header = document.createElement("h2");
  header.textContent = "about text here";

  const description = document.createElement("p");
  description.textContent = "about description here";

  fragment.append(header, description);
  main.append(fragment);
}
