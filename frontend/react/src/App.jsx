import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import CustomOrder from "./pages/CustomOrder";
import AboutUs from "./pages/AboutUs";

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
        <Link to="/custom-order">Custom Cake</Link>
        <Link to="/about">About Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/custom-order" element={<CustomOrder />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
