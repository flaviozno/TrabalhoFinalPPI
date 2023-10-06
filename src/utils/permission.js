document.addEventListener("DOMContentLoaded", () => {
  let route = window.location.href.split("/")[5];
  if (publicRoutes.includes(route) == false) {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      Swal.fire({
        title: "403 Forbidden",
        text: "This route is private!!",
        icon: "error",
        timerProgressBar: true,
        timer: 3500,
        willClose: () => {
          location.href = "../pages/index.html";
        },
      });
    }
  }
});
