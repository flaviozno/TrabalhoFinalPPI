$(document).ready(async function () {
  $("#usersTable").DataTable({
    searching: true,
    data: user,
    columns: [
      { data: "id", searchable: true },
      { data: "name", searchable: true },
      { data: "email", searchable: true },
      { data: "password" },
      {
        data: null,
        render: function (data) {
          return `<button class="btn btn-danger btn-sm" onclick="deleteUser(${data.id})">Excluir</button>`;
        },
      },
    ],
  });
  let { produtos_paineis_solar } = await fetch("../utils/products.json").then(
    (response) => response.json()
  );
  $("#itensTable").DataTable({
    searching: true,
    data: produtos_paineis_solar,
    columns: [
      { data: "id", searchable: true },
      { data: "nome", searchable: true },
      { data: "descricao", searchable: true },
      { data: "img", searchable: true },
      { data: "qtd", searchable: true },
      { data: "preco", searchable: true },
      {
        data: null,
        render: function (data) {
          return `<button class="btn btn-danger btn-sm" onclick="deleteUser(${data.id})">Excluir</button>`;
        },
      },
    ],
  });
});
