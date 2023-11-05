class AxiosService {
  constructor() {
    this.baseURL = "http://localhost:3333/api";
  }

  getUsers() {
    return axios.get(`${this.baseURL}/users`);
  }

  createUser(data) {
    return axios.post(`${this.baseURL}/users`, data);
  }

  put(url, data, config = {}) {
    return axios.put(this.baseURL + url, data, config);
  }

  delete(url, config = {}) {
    return axios.delete(this.baseURL + url, config);
  }
}

class AjaxService {
  constructor() {
    this.baseURL = "http://localhost:3333/api";
  }

  get(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", this.baseURL + url);
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => {
        reject(xhr.statusText);
      };
      xhr.send();
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", this.baseURL + url);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = () => {
        if (xhr.status === 201) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => {
        reject(xhr.statusText);
      };
      xhr.send(JSON.stringify(data));
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("PUT", this.baseURL + url);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => {
        reject(xhr.statusText);
      };
      xhr.send(JSON.stringify(data));
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("DELETE", this.baseURL + url);
      xhr.onload = () => {
        if (xhr.status === 204) {
          resolve();
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => {
        reject(xhr.statusText);
      };
      xhr.send();
    });
  }
}
