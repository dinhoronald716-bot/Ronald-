import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Articles from "../pages/Articles";
import CreateArticle from "../pages/CreateArticle";
import EditArticle from "../pages/EditArticle";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ArticleDetails from "../pages/ArticleDetails";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/create" element={<CreateArticle />} />
            <Route path="/edit/:id" element={<EditArticle />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles/:id" element={<ArticleDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
