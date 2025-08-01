// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <nav style={{ padding: "1rem", background: "#ffe4e1" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
