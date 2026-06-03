import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditArticle() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();

        console.log(title, content);

        navigate("/articles");
    };

    return (
        <div className="container">
            <h1>Edit Article</h1>

            <form onSubmit={submit}>
                <input
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                />

                <textarea
                    value={content}
                    onChange={(e) =>
                        setContent(e.target.value)
                    }
                />

                <button className="primary">
                    Save
                </button>
            </form>
        </div>
    );
}

export default EditArticle;
