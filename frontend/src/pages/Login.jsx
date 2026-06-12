import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://ronald-backend.onrender.com/api/users/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("loggedUser", JSON.stringify(res.data));

      alert("Login successful 🚀");

      setTimeout(() => {
        navigate("/home", { replace: true });
      }, 0);

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Invalid credentials ❌"
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
  
        {/* LEFT SIDE - ABOUT */}
        <div className="auth-info">
          <h2>Welcome to MyPlatform</h2>
          <p>
            A modern platform built to help you manage,
            learn and grow your digital skills.
          </p>
  
          <div className="info-block">
            <h4>📌 About</h4>
            <p>
              This site is designed for students and developers
              to collaborate and learn modern web technologies.
            </p>
          </div>
  
          <div className="info-block">
            <h4>📜 History</h4>
            <p>
              Started as a small project, now evolving into a
              full learning ecosystem for developers.
            </p>
          </div>
  
          <div className="info-block">
            <h4>🚀 Vision</h4>
            <p>
              To become a powerful learning platform in Africa
              and beyond.
            </p>
          </div>
        </div>
  
        {/* RIGHT SIDE - LOGIN FORM */}
        <form className="auth-form" onSubmit={handleLogin}>
          <h1>Login</h1>
  
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
  
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
  
          <button type="submit">Login</button>
  
          <p>
            Don't have an account?{" "}
            <Link to="/register">Register</Link>
          </p>
        </form>
  
      </div>
    </div>
  );
}

export default Login;
