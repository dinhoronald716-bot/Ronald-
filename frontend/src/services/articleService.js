import axios from "axios";

const API = "https://ronald-backend.onrender.com/api";

export const getArticles = () => axios.get(API);
export const createArticle = (data) => axios.post(API, data);
export const updateArticle = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteArticle = (id) => axios.delete(`${API}/${id}`);
export const likeArticle = (article) => {
  return axios.patch(`${API_URL}/${article.id}`, {
    likes: article.likes + 1,
  });
};

// DISLIKE
export const dislikeArticle = (article) => {
  return axios.patch(`${API_URL}/${article.id}`, {
    dislikes: article.dislikes + 1,
  });
};
