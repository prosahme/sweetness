import { useState } from "react";

function Checkout() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    method: "pickup",
    coupon: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          address: form.address,
          method: form.method,
          total: 200.0,
          items: [],
        }),
      });

      if (res.ok) {
        alert("✅ Order submitted successfully!");
        setForm({
          name: "",
          address: "",
          phone: "",
          method: "pickup",
          coupon: "",
        });
      } else {
        const errorData = await res.json();
        alert("❌ Failed to submit order: " + errorData.message);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong. Check your network or backend.");
    }
  };

  return (
    <div className="checkout-container">
      <h2>🍰 Checkout</h2>

      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          disabled={form.method === "pickup"}
        />

        <div className="method-select">
          <label>
            <input
              type="radio"
              name="method"
              value="pickup"
              checked={form.method === "pickup"}
              onChange={handleChange}
            />
            Pickup
          </label>

          <label>
            <input
              type="radio"
              name="method"
              value="delivery"
              checked={form.method === "delivery"}
              onChange={handleChange}
            />
            Delivery
          </label>
        </div>

        <input
          type="text"
          name="coupon"
          placeholder="Coupon Code (optional)"
          value={form.coupon}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Confirm Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
