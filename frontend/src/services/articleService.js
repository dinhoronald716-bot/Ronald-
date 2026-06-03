import axios from "axios";

const API = "http://localhost:5000/articles";

export const getArticles = () => axios.get(API);
export const createArticle = (data) => axios.post(API, data);
export const updateArticle = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteArticle = (id) => axios.delete(`${API}/${id}`);
