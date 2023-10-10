document.addEventListener("DOMContentLoaded", () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let route = window.location.href.split("/")[4];

  let contentTag = document.getElementById("isVisible")
  let accountOPT = document.getElementById("account");
  let itens = document.getElementById("crudItens");
  let users = document.getElementById("crudUsers");

  if(user){
    accountOPT.classList.remove('d-none')
    itens.classList.remove('d-none')
    users.classList.remove('d-none')
    contentTag.classList.remove('d-none')
  }

  if (publicRoutes.includes(route) == false) {
    if (!user) {
      Swal.fire({
        title: "403 Forbidden",
        text: "This route is private!!",
        icon: "error",
        timerProgressBar: true,
        timer: 3500,
        willClose: () => {
          location.href = "../../src/index.html";
        },
      });
    }
  }
});
