import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://ronald-backend.onrender.com/api/users/register",
        {
          name,
          email,
          password,
        }
      );

      alert("Account created successfully 🚀");

      navigate("/login");
    }catch (error) {
      console.log(error);
      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
        error.message ||
        "Registration failed ❌"
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
  
        {/* LEFT INFO */}
        <div className="auth-info">
          <h2>Join Our Platform 🚀</h2>
          <p>
            Create your account and start learning,
            building and growing your skills.
          </p>
  
          <div className="info-block">
            <h4>🎯 Benefits</h4>
            <p>Access courses, projects and community tools.</p>
          </div>
  
          <div className="info-block">
            <h4>🔐 Secure</h4>
            <p>Your data is protected with modern security.</p>
          </div>
  
          <div className="info-block">
            <h4>🌍 Community</h4>
            <p>Connect with developers worldwide.</p>
          </div>
        </div>
  
        {/* RIGHT FORM */}
        <form className="auth-form" onSubmit={handleRegister}>
          <h1>Create Account</h1>
  
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
  
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
  
          <button type="submit">Register</button>
  
          <p>
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </form>
  
      </div>
    </div>
  );
}

export default Register;
