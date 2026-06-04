import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="page center">

            <h1>404</h1>
            <p>Page not found</p>

            <Link to="/">
                <button>Go Home</button>
            </Link>

        </div>
    );
}

export default NotFound;
