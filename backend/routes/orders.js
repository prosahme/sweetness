const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
  const { name, address, method, total, items } = req.body;

  console.log("🟢 Received order:", req.body);

  if (!Array.isArray(items)) {
    return res.status(400).json({ message: "Items must be an array" });
  }

  try {
    const [orderResult] = await db.execute(
      "INSERT INTO orders (customer_name, address, method, total_price) VALUES (?, ?, ?, ?)",
      [name, address, method, total]
    );

    const orderId = orderResult.insertId;
    console.log("✅ Order inserted with ID:", orderId);

    for (const item of items) {
      console.log("➕ Inserting item:", item);
      await db.execute(
        "INSERT INTO order_items (order_id, product_name, quantity, price) VALUES (?, ?, ?, ?)",
        [orderId, item.name, item.quantity, item.price]
      );
    }

    res.status(200).json({ message: "Order Confirmed", orderId });
  } catch (err) {
    console.error("❌ Order save failed:", err);
    return res.status(500).json({ message: "Error saving order" });
  }
});

module.exports = router;
