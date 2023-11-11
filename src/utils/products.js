const filterProductsByName = (name, allProducts) => {
  const filteredProducts = allProducts.filter((produto) => {
    const productName = produto.nome.toLowerCase();
    return productName.includes(name.toLowerCase());
  });
  return filteredProducts;
};

const getProducts = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:3333/api/products", true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText).products);
        } else {
          reject(new Error(`Erro na requisição: ${xhr.status}`));
        }
      }
    };

    xhr.send();
  });
};

const contentDiv = document.getElementById("produtos");
const searchBar = document.getElementById("searchBar");

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
            <img src="${produto.imgURL}" alt="${
        produto.name
      }" class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">${produto.name}</h5>
              <p class="card-text">${produto.description}</p>
              <h6>${currencyFormatter(produto.price)}</h6>
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

getProducts()
  .then((products) => {
    renderProducts(products);

    searchBar.addEventListener("input", () => {
      const searchTerm = searchBar.value;
      const filteredProducts = filterProductsByName(searchTerm, products);
      renderProducts(filteredProducts);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
