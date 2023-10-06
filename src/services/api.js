import { baseURL } from '../constants';

const api = {
  async getAllItens() {
    try {
      const response = await axios.get(`${baseURL}/itens`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar itens:', error);
      throw error;
    }
  },

  async getItemById(itemId) {
    try {
      const response = await axios.get(`${baseURL}/itens/${itemId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar item por ID:', error); 
      throw error;
    }
  },

  async createItem(newItem) {
    try {
      const response = await axios.post(`${baseURL}/itens`, newItem);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar um novo item:', error);
      throw error;
    }
  },


  async updateItem(itemId, updatedItem) {
    try {
      const response = await axios.put(`${baseURL}/itens/${itemId}`, updatedItem);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar item por ID:', error);
      throw error;
    }
  },

  async deleteItem(itemId) {
    try {
      const response = await axios.delete(`${baseURL}/itens/${itemId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao excluir item por ID:', error);
      throw error;
    }
  },
};

export default api;
