$(document).ready(async function () {
  try {
    const axios = new AxiosService();
    const response = await axios.getUsers();

    $("#usersTable").DataTable({
      searching: true,
      data: response.data.users,
      columns: [
        { data: "name", searchable: true },
        { data: "email", searchable: true },
        { data: "passwordHash" },
        {
          data: null,
          render: function (data) {
            return `<button class="btn btn-danger btn-sm" onclick="deleteUser(${data.id})">Excluir</button>`;
          },
        },
      ],
    });
  } catch (error) {}
  console.error("Erro ao carregar dados da API:", error.message);
});
