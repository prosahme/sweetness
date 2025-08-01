// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <nav
        style={{
          padding: "1rem",
          background: "#ffe4e1",
          display: "flex",
          gap: "1rem",
        }}
      >
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/admin">Admin</Link>
        <Link to="/menu">Menu</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
