import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="container">
            <h1>404</h1>

            <p>Page introuvable</p>

            <Link to="/">
                Retour accueil
            </Link>
        </div>
    );
}

export default NotFound;
