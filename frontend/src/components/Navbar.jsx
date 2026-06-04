import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">

            {/* LOGO */}
            <div className="logo">
                🟠 TechBlog
            </div>

            {/* MENU DESKTOP */}
            <ul className={`nav-links ${open ? "active" : ""}`}>

                <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                <li><Link to="/articles" onClick={() => setOpen(false)}>Articles</Link></li>
                <li><Link to="/create" onClick={() => setOpen(false)}>Create</Link></li>
                <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
                <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>

            </ul>

            {/* HAMBURGER MENU */}
            <div className="menu-icon" onClick={() => setOpen(!open)}>
                ☰
            </div>

        </nav>
    );
}

export default Navbar;
