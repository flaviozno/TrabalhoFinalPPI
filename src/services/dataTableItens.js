$(document).ready(async function () {
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
