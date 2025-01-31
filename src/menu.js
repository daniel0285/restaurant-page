export function renderMenuContent() {
  const main = document.getElementById("content");
  main.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const menu = document.createElement("section");
  menu.classList.add("menu");

  menu.innerHTML = `
      <h1>Menu</h1>
      <div class="dishes">
      <div class="dish">
          <h2>Adobo</h2>
          <p>A rich, flavorful stew made with tender chicken and pork, 
          marinated in a perfect blend of soy sauce, vinegar, garlic, and spices,
          simmered to perfection for a mouthwatering experience.</p>
      </div>

      <div class="dish">
          <h2>Pork Sinigang</h2>
          <p>A comforting Filipino classic, featuring succulent pork simmered
          in a tangy and aromatic tamarind-based broth, with vegetables like kangkong (water spinach) and labanos (radish),
            creating a perfect balance of sour and savory flavors.</p>
      </div>

      <div class="dish">
          <h2>Lechon Kawali</h2>
          <p>Indulge in the crispy, golden perfection of Lechon Kawali – tender,
          juicy pork belly deep-fried until the skin crackles and bursts with flavor,
            served with a side of liver sauce for the ultimate savory delight.</p>
      </div>
      <div class="dish">
            <h2>Pancit Canton</h2>
            <p>A hearty and flavorful stir-fried noodle dish loaded with a medley of crisp vegetables, succulent shrimp,
                and tender pork, tossed in a savory soy-based sauce for the perfect balance of taste and texture.</p>
        </div>
      </div>`;

  fragment.append(menu);
  main.append(fragment);
}
