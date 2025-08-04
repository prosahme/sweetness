import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Registration successful!");
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Error registering");
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input
        className="auth-input"
        name="name"
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <br />
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
      <button className="auth-button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default Register;
