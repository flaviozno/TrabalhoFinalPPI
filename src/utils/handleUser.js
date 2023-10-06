const updateUserStatus = (username) => {
  const userStatusElement = document.getElementById("userStatus");
  const loginButton = document.getElementById("loginButton");
  const logoutButton = document.getElementById("logoutButton");

  if (username) {
    userStatusElement.style.display = "inline";
    userStatusElement.innerHTML = ` <a class="nav-link text-white" >
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

loginButton.addEventListener("click", () => {
  isLoggedIn = true;
  updateUserStatus("flavio");
});

logoutButton.addEventListener("click", () => {
  isLoggedIn = false;
  updateUserStatus("");
});
