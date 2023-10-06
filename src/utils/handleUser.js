const updateUserStatus = (username) => {
  const userStatusElement = document.getElementById("userStatus");
  const loginButton = document.getElementById("loginButton");
  const logoutButton = document.getElementById("logoutButton");

  if (username) {
    userStatusElement.style.display = "inline";
    userStatusElement.innerHTML = ` <a class="nav-link text-white" href="../pages/account.html">
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

const handleLogin = (e) => {
  e.preventDefault()
  const response = loginUser({email: "admin@admin.com", password: "123123"})
  if(response){
    isLoggedIn = true
    localStorage.setItem('user', JSON.stringify(response))
    location.href = "../pages/index.html"
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let user = JSON.parse(localStorage.getItem('user'))
  if(user && user.name){
    updateUserStatus(user.name)
  }
});

loginButton.addEventListener("click", () => {
  location.href = "../pages/login.html"
});

logoutButton.addEventListener("click", () => {
  localStorage.removeItem('user')
  isLoggedIn = false;
  updateUserStatus("");
});
