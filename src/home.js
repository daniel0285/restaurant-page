export function renderHomeContent() {
  const main = document.getElementById("content");
  main.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const home = document.createElement("section");
  home.classList.add("home");

  home.innerHTML = `<h1>Welcome to Filipino Flavors</h1>
                    <p>Experience the best of Filipino cuisine!</p>`;

  fragment.append(home);
  main.append(fragment);
}
