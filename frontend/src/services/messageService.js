import axios from "axios";

const API_URL = "http://localhost:5000/messages";

// 📤 envoyer message
export const sendMessage = (data) => {
  return axios.post(API_URL, data);
};

// 📥 récupérer messages
export const getMessages = () => {
  return axios.get(API_URL);
};

// 🗑 supprimer message
export const deleteMessage = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};