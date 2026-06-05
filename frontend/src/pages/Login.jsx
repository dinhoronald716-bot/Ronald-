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
        "http://localhost:5000/api/users/login",
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
      <form
        className="auth-form"
        onSubmit={handleLogin}
      >
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;