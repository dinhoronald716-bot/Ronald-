import axios from "axios";

const API = "https://ronald-backend.onrender.com/api/articles";

// GET ALL
export const getArticles = () => axios.get(API);

// CREATE
export const createArticle = (data) => axios.post(API, data);

// UPDATE
export const updateArticle = (id, data) =>
  axios.put(`${API}/${id}`, data);

// DELETE
export const deleteArticle = (id) =>
  axios.delete(`${API}/${id}`);

// LIKE
export const likeArticle = (article) => {
  return axios.patch(`${API}/${article.id}`, {
    likes: (article.likes || 0) + 1,
  });
};

// DISLIKE
export const dislikeArticle = (article) => {
  return axios.patch(`${API}/${article.id}`, {
    dislikes: (article.dislikes || 0) + 1,
  });
};