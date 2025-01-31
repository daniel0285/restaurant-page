export function renderAboutContent() {
  const main = document.getElementById("content");
  main.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const about = document.createElement("section");

  about.innerHTML = `        
      <h2>Contact Us</h2>
      <p>Visit us at:</p>
      <address>
      123 Filipino Street, Manila, Philippines<br>
      Phone: (123) 456-7890<br>
      Email: info@filipinorestaurant.com
      </address>`;

  fragment.append(about);
  main.append(fragment);
}
