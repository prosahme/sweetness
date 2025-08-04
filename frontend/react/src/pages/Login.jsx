import { useState } from "react";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Login successful!");
        console.log("Token:", data.token);
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Error logging in");
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input
        className="auth-input"
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <br />
      <input
        className="auth-input"
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <br />
      <button className="auth-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
