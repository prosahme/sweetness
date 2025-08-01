// src/pages/Landing.jsx
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>
            Welcome to <span>SweetNest</span>
          </h1>
          <p>Your cozy neighborhood bakery and café</p>
          <button className="order-btn" onClick={() => navigate("/menu")}>
            Explore Menu
          </button>
        </div>
      </header>

      <section className="announcement">
        <p>🎉20% off custom cakes this weekend only! pre-order now. 🎂</p>
      </section>
      <section className="highlights">
        <h2>Top Picks</h2>
        <div className="items">
          <div className="item-card">
            <img src="/cake 1.jpg" alt="Cake" />
            <p>Chocolate Heaven</p>
          </div>
          <div className="item-card">
            <img src="/croissant.jpg" alt="Croissant" />
            <p>Buttery Croissant</p>
          </div>
          <div className="item-card">
            <img src="/coffee 1.jpg" alt="Coffee" />
            <p>Freshly Brewed Coffee</p>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h2>What Our Customers Say</h2>
        <div className="review-cards">
          <div className="review-card">
            <p>
              "The chocolate cake was heavenly! Will definitely order again."
            </p>
            <h4>- Hana M.</h4>
          </div>
          <div className="review-card">
            <p>"Best croissants in town. Crispy, buttery, and delicious!"</p>
            <h4>- Dawit A.</h4>
          </div>
          <div className="review-card">
            <p>"I loved the cozy vibe and their coffee is unmatched."</p>
            <h4>- Selam F.</h4>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 SweetNest. Baked with 💗 in Ethiopia.</p>
      </footer>
    </div>
  );
}

export default Landing;
