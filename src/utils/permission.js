document.addEventListener("DOMContentLoaded", () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let isAdmin = user && user.user.isAdmin;
  let route = window.location.href.split("/");
  let index = route[route.length - 1];
  let urlWithoutIndex = route.slice(0, -1).join("/") + "/index.html";

  let contentTag = document.getElementById("isVisible");
  let contentTagUser = document.getElementById("isVisibleUser");
  let accountOPT = document.getElementById("account");
  let itens = document.getElementById("crudItens");
  let users = document.getElementById("crudUsers");

  if (user) {
    if (!isAdmin) {
      accountOPT.classList.remove("d-none");
      contentTagUser.classList.remove("d-none");
    } else {
      accountOPT.classList.remove("d-none");
      contentTagUser.classList.remove("d-none");
      itens.classList.remove("d-none");
      users.classList.remove("d-none");
      contentTag.classList.remove("d-none");
    }
  }

  if (adminRoutes.includes(index)) {
    if ((user && isAdmin === false) || isAdmin === false) {
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
  if (publicRoutes.includes(index) == false) {
    if (!user) {
      Swal.fire({
        title: "403 Forbidden",
        text: "Você precisa estar logado!",
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
