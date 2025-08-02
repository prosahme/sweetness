import React from "react";
import kitchenImg from "../assets/kitchen.jpg";
import staffImg from "../assets/staff.jpg";
import customerImg from "../assets/customer.jpg";
import awardImg from "../assets/award.jpg";

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          SweetNest began with a dream — to bring warmth, love, and
          deliciousness into every bite. What started as a small home bakery is
          now a cozy café loved by many. We believe in baking everything fresh,
          with the best ingredients and a whole lot of heart.
        </p>
      </section>

      <section className="about-photos">
        <h2>Meet Our Sweet World</h2>
        <div className="photo-gallery">
          <img src={kitchenImg} alt="Our kitchen" />
          <img src={staffImg} alt="Our team" />
          <img src={customerImg} alt="Happy customers" />
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>✨ Freshness in every slice</li>
          <li>💖 Made with love & care</li>
          <li>🎯 Consistent quality and creativity</li>
        </ul>
      </section>

      <section className="about-testimonials">
        <h2>What People Say</h2>
        <div className="testimonial">
          <p>"Best cake I’ve ever had! I felt the love in every bite."</p>
          <span>— Hana, loyal customer</span>
        </div>
        <div className="award">
          <img src={awardImg} alt="Award" />
          <p>🏆 Winner of Addis’s Favorite Bakery 2024</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
