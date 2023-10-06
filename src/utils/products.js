function filterProductsByName(name) {
  const productCards = document.querySelectorAll("#contentCard");

  productCards.forEach((card) => {
    const productName = card.querySelector("h3").textContent.toLowerCase();
    if (productName.includes(name.toLowerCase())) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", () => {
  const searchTerm = searchBar.value;
  filterProductsByName(searchTerm);
});

document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("produtos");

  const handleNumberOfStars = (number) => {
    const estrelasHtml = [];
    for (let i = 0; i < 5; i++) {
      if (i < number) {
        estrelasHtml.push(
          '<li><i class="fa-solid fa-star"  style="color: yellow"></i></li>'
        );
      } else {
        estrelasHtml.push('<li><i class="fa-solid fa-star"></i></li>');
      }
    }
    return estrelasHtml.join("");
  };

  fetch("../utils/products.json")
    .then((response) => response.json())
    .then((product) => {
      product.produtos_paineis_solar.forEach((produto) => {
        const card = document.createElement("div");
        card.id = "contentCard";
        card.innerHTML = `
              <img src="${produto.img}" alt="${produto.nome}" />
              <h3>${produto.nome}</h3>
              <p>${produto.descricao}</p>
              <h6>R$${produto.preco}</h6>
              <ul>
                ${handleNumberOfStars(produto.stars)}
              </ul>
              <button>Comprar</button>
            `;
        contentDiv.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar o arquivo JSON:", error);
    });
});
