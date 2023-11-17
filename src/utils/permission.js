document.addEventListener("DOMContentLoaded", () => {
  let Admin =
    JSON.parse(localStorage.getItem("user")) &&
    JSON.parse(localStorage.getItem("user")).user.isAdmin;
  let user = JSON.parse(localStorage.getItem("user"));
  let route = window.location.href.split("/");
  let index = route[route.length - 1];
  let urlWithoutIndex = route.slice(0, -1).join("/") + "/index.html";

  let contentTag = document.getElementById("isVisible");
  let contentTagUser = document.getElementById("isVisibleUser");
  let accountOPT = document.getElementById("account");
  let itens = document.getElementById("crudItens");
  let users = document.getElementById("crudUsers");

  if (Admin) {
    itens.classList.remove("d-none");
    users.classList.remove("d-none");
    contentTag.classList.remove("d-none");
    accountOPT.classList.remove("d-none");
    contentTagUser.classList.remove("d-none");
  }

  if (user) {
    accountOPT.classList.remove("d-none");
    contentTagUser.classList.remove("d-none");
  }

  if (publicRoutes.includes(index) == false) {
    if (!user || !Admin) {
      Swal.fire({
        title: "403 Forbidden",
        text: "This route is private!!",
        icon: "error",
        timerProgressBar: true,
        timer: 3500,
        willClose: () => {
          location.href = urlWithoutIndex;
        },
      });
    }
  }
});
