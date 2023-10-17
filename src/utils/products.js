const filterProductsByName = (name, allProducts) => {
  const filteredProducts = allProducts.filter((produto) => {
    const productName = produto.nome.toLowerCase();
    return productName.includes(name.toLowerCase());
  });
  return filteredProducts;
};

const contentDiv = document.getElementById("produtos");
const searchBar = document.getElementById("searchBar");
let allProducts = [];

const handleNumberOfStars = (number) => {
  const estrelasHtml = [];
  for (let i = 0; i < 5; i++) {
    if (i < number) {
      estrelasHtml.push(
        '<li><i class="fa-solid fa-star" style="color: yellow"></i></li>'
      );
    } else {
      estrelasHtml.push('<li><i class="fa-solid fa-star"></i></li>');
    }
  }
  return estrelasHtml.join("");
};

const renderProducts = (products) => {
  contentDiv.innerHTML = "";
  if (products && products.length > 0) {
    products.forEach((produto) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
            <img src="${produto.img}" alt="${
        produto.nome
      }" class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">${produto.nome}</h5>
              <p class="card-text">${produto.descricao}</p>
              <h6>${currencyFormatter(produto.preco)}</h6>
              
            </div>
            <ul>
                ${handleNumberOfStars(produto.stars)}
            </ul>
            <button>Comprar</button>
          `;
      contentDiv.appendChild(card);
    });
  } else {
    const card = document.createElement("div");
    card.innerHTML = `<span>Não existe nenhum produto com esse nome :/</span>`;
    card.style.padding = "1rem";
    contentDiv.appendChild(card);
  }
};

allProducts = produtos_paineis_solar;
renderProducts(produtos_paineis_solar);

// fetch("products.json")
//   .then((response) => response.json())
//   .then((data) => {
//     allProducts = data.produtos_paineis_solar;
//     renderProducts(allProducts);
//   })
//   .catch((error) => {
//     console.error("Erro ao carregar o arquivo JSON:", error);
//   });

searchBar.addEventListener("input", () => {
  const searchTerm = searchBar.value;
  const filteredProducts = filterProductsByName(searchTerm, allProducts);
  renderProducts(filteredProducts);
});
