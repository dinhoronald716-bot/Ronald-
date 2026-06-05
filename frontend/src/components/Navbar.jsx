import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import "../styles/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <button
          className="logout-btn"
          onClick={handleLogout}
          title="Logout"
        >
          <AiOutlineLogout />
        </button>

        <div className="logo">
          🟠 TechBlog
        </div>
      </div>

      {/* MENU */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>
          <Link to="/home" onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/articles" onClick={() => setOpen(false)}>
            Articles
          </Link>
        </li>

        <li>
          <Link to="/create" onClick={() => setOpen(false)}>
            Create
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>

      {/* MOBILE MENU */}
      <div
        className="menu-icon"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>
    </nav>
  );
}

export default Navbar;