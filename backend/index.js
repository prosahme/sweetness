const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const orderRoutes = require("./routes/orders");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
const uploadSingleImage = upload.single("image");

const productRouter = require("./routes/products");
app.use("/products", productRouter);
app.use("/orders", orderRoutes);
app.use("/auth", authRoutes);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sweet_db",
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

app.post("/custom-order", upload.single("image"), (req, res) => {
  const imageUrl = req.file
    ? `http://localhost:${PORT}/uploads/${req.file.filename}`
    : null;

  const {
    cakeType,
    flavor,
    decoration,
    eventType,
    date,
    time,
    contactName,
    phone,
    email,
    paymentOption,
  } = req.body;
  const sql = `INSERT INTO custom_orders (
      cake_type, flavor, decoration, event_type,
      pickup_date, pickup_time, contact_name,
      contact_phone, contact_email, image_url, payment_type
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    cakeType,
    flavor,
    decoration,
    eventType,
    date,
    time,
    contactName,
    phone,
    email,
    imageUrl,
    paymentOption,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("❌ Error inserting custom order:", err);
      if (req.file) {
        const fs = require("fs");
        fs.unlink(req.file.path, (unlinkErr) => {
          if (unlinkErr)
            console.error("❌ Failed to delete temp file:", unlinkErr);
        });
      }
      return res.status(500).json({ error: "Database insertion failed" });
    } else {
      console.log("✅ Custom order submitted:", result);
      return res.status(201).json({ message: "Custom cake order submitted!" });
    }
  });
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("Error sending message:", err);
      res.status(500).json({ message: "Error sending message" });
    } else {
      res.json({ message: "Message sent successfully" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
