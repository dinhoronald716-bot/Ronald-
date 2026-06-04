import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Articles from "../pages/Articles";
import ArticleDetails from "../pages/ArticleDetails";
import Contact from "../pages/Contact";
import About from "../pages/About";
import CreateArticle from "../pages/CreateArticle";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  return user ? children : <Navigate to="/login" />;
};

function AppRoutes() {
  return (
    <Routes>

      {/* 🔥 LOGIN FIRST PAGE */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* AUTH PAGES */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* PROTECTED PAGES */}
      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/articles" element={<PrivateRoute><Articles /></PrivateRoute>} />
      <Route path="/articles/:id" element={<PrivateRoute><ArticleDetails /></PrivateRoute>} />
      <Route path="/create" element={<PrivateRoute><CreateArticle /></PrivateRoute>} />
      <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
      <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />

    </Routes>
  );
}

export default AppRoutes;