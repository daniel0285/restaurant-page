export function renderHomeContent() {
  main.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const header = document.createElement("h2");
  header.textContent = "home text here";

  const description = document.createElement("p");
  description.textContent = "home description here";

  fragment.append(header, description);
  main.append(fragment);
}
