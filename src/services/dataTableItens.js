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

$(document).ready(async function () {
  try {
    const products = await getProducts();

    $("#itensTable").DataTable({
      searching: true,
      data: products,
      columns: [
        { data: "id", searchable: true },
        { data: "name", searchable: true },
        { data: "description", searchable: true },
        { data: "imgURL", searchable: true },
        { data: "amount", searchable: true },
        { data: "price", searchable: true },
        {
          data: null,
          render: function (data) {
            return `<button class="btn btn-danger btn-sm" onclick="deleteProduct(${data.id})">Excluir</button>`;
          },
        },
      ],
    });
  } catch (error) {
    console.error(error.message);
  }
});
