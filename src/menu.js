export function renderMenuContent() {
  main.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const header = document.createElement("h2");
  header.textContent = "menu text here";

  const description = document.createElement("p");
  description.textContent = "menu description here";

  fragment.append(header, description);
  main.append(fragment);
}
