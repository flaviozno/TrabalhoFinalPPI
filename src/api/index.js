class AxiosService {
  constructor() {
    this.baseURL = 'http://localhost:3333/api';
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

