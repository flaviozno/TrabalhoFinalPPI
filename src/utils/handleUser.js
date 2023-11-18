let avatarPhoto = null;
let photoToUpload = null;
let route = window.location.href.split("/");
let index = route[route.length - 1];

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

let isLoggedIn = JSON.parse(localStorage.getItem("user"));

const handleEdit = async (e) => {
  e.preventDefault();
  const axios = new AxiosService();
  let name = document.getElementById("floatingName");
  let email = document.getElementById("floatingEmail");
  if (name.value.trim() === "") {
    name.classList.add("is-invalid");
  } else {
    const response = await axios.editUser({
      name: name.value.trim(),
      email: email.value.trim(),
    });
    if (response && response.status === 200) {
      let user = JSON.parse(localStorage.getItem("user"));
      user.user = response.data.user;
      localStorage.setItem("user", JSON.stringify(user));
      Swal.fire({
        title: "User updated",
        icon: "success",
        timerProgressBar: true,
        timer: 3500,
        willClose: () => {
          window.location.reload();
        },
      });
    }
  }
};
if (index == "register.html")
  document.getElementById("photoUpload").addEventListener("change", (e) => {
    const fileInput = e.target;
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (ev) => {
        photoToUpload = ev.target.result;
      };

      reader.readAsDataURL(file);
    }
  });

const handleRegister = async (e) => {
  e.preventDefault();

  const axios = new AxiosService();
  let name = document.getElementById("floatingName");
  let email = document.getElementById("floatingEmail");
  let password = document.getElementById("floatingPassword");
  let passwordConfirm = document.getElementById("floatingPasswordConfirm");
  const base64Data = photoToUpload.split(",")[1];
  const binaryString = window.atob(base64Data);
  const arrayBuffer = new ArrayBuffer(binaryString.length);
  console.log(arrayBuffer)

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
    // const arrayBuffer = Uint8Array.from(atob(photoToUpload), (c) =>
    //   c.charCodeAt(0)
    // ).buffer;
    // console.log(arrayBuffer)
    const response = await axios.createUser({
      name: name.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
      avatarUrl: arrayBuffer,
    });
    if (response) {
      console.log(response);
    }
  }
};

const handleLogin = async (e) => {
  e.preventDefault();
  const axios = new AxiosService();
  let email = document.getElementById("floatingInput");
  let password = document.getElementById("floatingPassword");
  if (email.value.trim() === "") {
    email.classList.add("is-invalid");
  }
  if (password.value.trim() === "") {
    password.classList.add("is-invalid");
  } else {
    const response = await axios.authUser({
      email: email.value.trim(),
      password: password.value.trim(),
    });
    if (response && response.status == 200) {
      isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(response.data));
      location.href = "./index.html";
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.user.name) {
    updateUserStatus(user.user.name);
  }
});

if (!["login.html", "register.html"].includes(index))
  loginButton.addEventListener("click", () => {
    location.href = "./login.html";
  });

if (!["login.html", "register.html"].includes(index))
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("user");
    isLoggedIn = false;
    updateUserStatus("");
    location.href = "./index.html";
  });

if (index != "register.html")
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

if (!["login.html", "register.html"].includes(index))
  document.addEventListener("DOMContentLoaded", () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let name = document.getElementById("floatingName");
    let email = document.getElementById("floatingEmail");
    let password = document.getElementById("floatingPassword");
    let passwordConfirm = document.getElementById("floatingPasswordConfirm");
    let photoPreview = document.getElementById("photoPreview");

    name.value = user.user.name;
    email.value = user.user.email;
    password.value = user.user.passwordHash;
    passwordConfirm.value = user.user.passwordHash;

    const image = document.createElement("img");
    image.src = "https://github.com/flaviozno.png";
    image.classList.add("rounded-circle");
    image.style.width = "75px";
    image.style.height = "75px";
    photoPreview.innerHTML = "";
    photoPreview.appendChild(image);
  });
