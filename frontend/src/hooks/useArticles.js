import { useEffect, useState } from "react";
import { getArticles } from "../services/articleService";

function useArticles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getArticles()
            .then((res) => {
                setArticles(res.data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {
        articles,
        loading
    };
}

export default useArticles;
