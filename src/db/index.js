// aqui nao estou considerando token e nem o tempo que o usuario esta logado no sistema, apenas um CRUD para testar o sistema

let user = [
  { id: 0, email: "admin@admin.com", password: "123123", name: "Admin" },
  { id: 2, email: "admin@admin.com", password: "123123", name: "flavio" }
];

const getUser = () => {
  if (user && user.length > 0) {
    return user[0];
  }
};

const loginUser = ({ email, password }) => {
  if (user && user[0].email === email && user[0].password === password) {
    return user[0];
  } else return null;
};

const registerUser = ({ name, email, password, avatar, bday = new Date() }) => {
  user.push({
    id: 1,
    name: name,
    email: email,
    password: password,
    avatar: avatar,
    bday: bday,
  });
  return user[1];
};

const deleteUser = (id) => {
  const userIndex = user.findIndex((u) => u.id === id);
  if (userIndex !== -1) {
    user.splice(userIndex, 1);
  }
};
