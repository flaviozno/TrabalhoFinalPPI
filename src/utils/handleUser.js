let avatarPhoto = null;
const updateUserStatus = (username) => {
  username = username.split(" ")[0];
  const userStatusElement = document.getElementById("userStatus");
  const loginButton = document.getElementById("loginButton");
  const logoutButton = document.getElementById("logoutButton");

  if (username) {
    userStatusElement.style.display = "inline";
    userStatusElement.innerHTML = ` <a class="nav-link text-white" href="./account.html">
              <i class="fa-solid fa-user"></i>
                <span class="d-none d-sm-inline">${username}</span>
          </a>`;
    loginButton.style.display = "none";
    logoutButton.style.display = "inline";
  } else {
    userStatusElement.style.display = "none";
    loginButton.style.display = "inline";
    logoutButton.style.display = "none";
  }
};

const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");

let isLoggedIn = false;

const handleEdit = (e) => {
  e.preventDefault();
};

const handleRegister = (e) => {
  e.preventDefault();
  let name = document.getElementById("floatingName");
  let email = document.getElementById("floatingEmail");
  let password = document.getElementById("floatingPassword");
  let passwordConfirm = document.getElementById("floatingPasswordConfirm");
  if (name.value.trim() === "") {
    name.classList.add("is-invalid");
  }
  if (email.value.trim() === "") {
    email.classList.add("is-invalid");
  }
  if (password.value.trim() === "") {
    password.classList.add("is-invalid");
  }
  if (password.value.trim() !== passwordConfirm.value.trim()) {
    password.classList.add("is-invalid");
  } else {
    const response = registerUser({
      name: name.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
      avatarUrl: avatarPhoto,
    });
    if (response) {
      isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(response));
      location.href = "./index.html";
    }
  }
};

const handleLogin = (e) => {
  e.preventDefault();
  let email = document.getElementById("floatingInput");
  let password = document.getElementById("floatingPassword");
  if (email.value.trim() === "") {
    email.classList.add("is-invalid");
  }
  if (password.value.trim() === "") {
    password.classList.add("is-invalid");
  } else {
    const response = loginUser({
      email: email.value.trim(),
      password: password.value.trim(),
    });
    if (response) {
      isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(response));
      location.href = "./index.html";
    } else {
      Swal.fire({
        title: "Error",
        text: "User not found!",
        icon: "error",
        timerProgressBar: true,
        timer: 3500,
      });
    }
  }
};
if (
  [
    "index.html",
    "sobre.html",
    "produtos.html",
    "crud-users.html",
    "crud-itens.html",
    "account.html",
  ].includes(window.location.href.split("/")[4])
)
  document.addEventListener("DOMContentLoaded", () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user && user.name) {
      updateUserStatus(user.name);
    }
  });

if (
  ["index.html", "sobre.html", "produtos.html"].includes(
    window.location.href.split("/")[4]
  )
)
  loginButton.addEventListener("click", () => {
    location.href = "./login.html";
  });

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("user");
  isLoggedIn = false;
  updateUserStatus("");
  location.href = "./index.html";
});

if (window.location.href.split("/")[4] === "register.html")
  document.getElementById("photoUpload").addEventListener(
    "change",
    function () {
      const fileInput = this;
      const photoPreview = document.getElementById("photoPreview");

      if (fileInput.files && fileInput.files[0]) {
        avatarPhoto = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
          const image = document.createElement("img");
          image.src = e.target.result;
          image.classList.add("rounded-circle");
          image.style.width = "75px";
          image.style.height = "75px";

          photoPreview.innerHTML = "";
          photoPreview.appendChild(image);
        };

        reader.readAsDataURL(fileInput.files[0]);
      } else {
        photoPreview.innerHTML = "";
      }
    },
    true
  );

if (window.location.href.split("/")[4] === "account.html")
  document.addEventListener("DOMContentLoaded", () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let name = document.getElementById("floatingName");
    let email = document.getElementById("floatingEmail");
    let password = document.getElementById("floatingPassword");
    let passwordConfirm = document.getElementById("floatingPasswordConfirm");
    let photoPreview = document.getElementById("photoPreview");


    name.value = user.name;
    email.value = user.email;
    password.value = user.password;
    passwordConfirm.value = user.password;

    const image = document.createElement("img");
    image.src = 'https://github.com/flaviozno.png';
    image.classList.add("rounded-circle");
    image.style.width = "75px";
    image.style.height = "75px";
    photoPreview.innerHTML = "";
    photoPreview.appendChild(image);
  });
