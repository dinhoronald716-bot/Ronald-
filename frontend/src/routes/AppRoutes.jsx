import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Articles from "../pages/Articles";
import CreateArticle from "../pages/CreateArticle";
import EditArticle from "../pages/EditArticle";
import NotFound from "../pages/NotFound";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/create" element={<CreateArticle />} />
            <Route path="/edit/:id" element={<EditArticle />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
