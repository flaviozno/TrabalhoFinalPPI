class AxiosService {
  constructor() {
    this.baseURL = "http://localhost:3333/api";

    axios.interceptors.request.use((config) => {
      const token = JSON.parse(localStorage.getItem("user"))
        ? JSON.parse(localStorage.getItem("user")).token
        : null;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  }

  authUser(data) {
    return axios.post(`${this.baseURL}/auth`, data);
  }

  getUsers() {
    return axios.get(`${this.baseURL}/users-admincontetn`);
  }

  createUser(data) {
    console.log(data)
    return axios.post(`${this.baseURL}/users`, data);
  }

  editUser(data) {
    return axios.patch(`${this.baseURL}/users`, data);
  }

  delete(url, config = {}) {
    return axios.delete(this.baseURL + url, config);
  }
}

class AjaxService {
  constructor() {
    this.baseURL = "http://localhost:3333/api";
  }

  async createProduct(formData) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open("POST", `${this.baseURL}/products`, true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
            window.location.reload();
          } else {
            reject(new Error(`Erro na requisição: ${xhr.status}`));
          }
        }
      };

      const jsonData = JSON.stringify(formData);

      xhr.send(jsonData);
    });
  }

  async getProducts() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open("GET", `${this.baseURL}/products`, true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).products);
          } else {
            reject(new Error(`Erro na requisição: ${xhr.status}`));
          }
        }
      };

      xhr.send();
    });
  }

  async editProduct(updatedData) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open("PATCH", `${this.baseURL}/products/${updatedData.productId}`, true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).product);
            window.location.reload();
          } else {
            reject(new Error(`Erro na requisição: ${xhr.status}`));
          }
        }
      };

      const jsonData = JSON.stringify(updatedData);
      xhr.send(jsonData);
    });
  }

  async deleteProduct(id) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open("DELETE", `${this.baseURL}/products/${id}`, true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).products);
            window.location.reload();
          } else {
            reject(new Error(`Erro na requisição: ${xhr.status}`));
          }
        }
      };

      xhr.send();
    });
  }
}
