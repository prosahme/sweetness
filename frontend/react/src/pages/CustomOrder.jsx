import React, { useState } from "react";
import "../App.css";

const initialFormData = {
  cakeType: "",
  flavor: "",
  decoration: "",
  eventType: "",
  date: "",
  time: "",
  contactName: "",
  phone: "",
  email: "",
  image: null,
  paymentOption: "deposit",
};

function CustomOrder() {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (let key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const res = await fetch("http://localhost:3001/custom-order", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        alert("🎉 Order sent successfully!");
        setFormData(initialFormData);
      } else {
        alert("❌ Something went wrong!");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert(`⚠️ Network error! Please try again later.`);
    }
  };
  return (
    <div className="custom-order-container">
      <h2>🎂 Custom Cake Order</h2>
      <form
        onSubmit={handleSubmit}
        className="custom-order-form"
        encType="multipart/form-data"
      >
        <label>
          Cake Type:
          <input
            type="text"
            name="cakeType"
            value={formData.cakeType}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Flavor:
          <input
            type="text"
            name="flavor"
            value={formData.flavor}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Decoration Style (describe):
          <input
            type="text"
            name="decoration"
            value={formData.decoration}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Upload Example Image (optional):
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
          />
        </label>

        <label>
          Event Type:
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
          >
            <option value="">-- Select --</option>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
            <option value="Graduation">Graduation</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Contact Name:
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Payment Option:
          <select
            name="paymentOption"
            value={formData.paymentOption}
            onChange={handleChange}
          >
            <option value="deposit">Pay Deposit</option>
            <option value="full">Pay Full</option>
          </select>
        </label>

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default CustomOrder;
