  class AxiosService {
    constructor() {
      this.baseURL = "http://localhost:3333/api";

      axios.interceptors.request.use(config => {
        const token = JSON.parse(localStorage.getItem("user")).token;  
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
  
        return config;
      });
    }

    authUser(data){
      return axios.post(`${this.baseURL}/auth`, data);
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

