$(document).ready(async function () {
  try {
    const ajax = new AjaxService();
    const products = await ajax.getProducts();

    $("#itensTable").DataTable({
      searching: true,
      data: products,
      columns: [
        { data: "name", searchable: true },
        { data: "description", searchable: true },
        { data: "imgURL", searchable: true },
        { data: "amount", searchable: true },
        { data: "price", searchable: true },
        {
          data: null,
          render: function (data) {
            return `<div style="display: flex; align-items: center; justify-content: space-between;">
            <button class="btn btn-danger btn-sm" onclick="ajax.deleteProduct('${data.id}')">Excluir</button>
            <button class="btn btn-primary btn-sm edit-button" data-product-id="${data.id}">Editar</button>
          </div>`;
          },
        },
      ],
    });
  } catch (error) {
    console.error(error.message);
  }
});
