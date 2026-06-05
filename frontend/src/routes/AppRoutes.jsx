import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Articles from "../pages/Articles";
import ArticleDetails from "../pages/ArticleDetails";
import Contact from "../pages/Contact";
import About from "../pages/About";
import CreateArticle from "../pages/CreateArticle";

// 🔐 Private Route
const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("loggedUser");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
function AppRoutes() {
  return (
    <Routes>

      {/* 🔥 ROOT → LOGIN */}
      <Route path="/" element={<Navigate to="/login" replace />} />

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