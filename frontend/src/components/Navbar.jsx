import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                Ronald Tech Blog
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/create">Create</Link>
            </div>
        </nav>
    );
}

export default Navbar;
