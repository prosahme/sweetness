const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

// ✅ MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sweet_db",
});

// ✅ GET all products
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// ✅ ADD a product
router.post("/", (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) return res.status(400).json({ error: "Missing fields" });

  db.query(
    "INSERT INTO products (name, price) VALUES (?, ?)",
    [name, price],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: "Product added", id: result.insertId });
    }
  );
});

// ✅ DELETE a product
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Product deleted" });
  });
});

module.exports = router;
