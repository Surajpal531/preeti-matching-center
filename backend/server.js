const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

/* ===============================
   Local memory database
================================ */

let admins = [{ username: "admin", password: "1234" }];
let customers = [];
let orders = [];

/* ===============================
   Admin Login
================================ */

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const admin = admins.find(
    (a) => a.username === username && a.password === password
  );

  if (admin) res.json({ success: true });
  else res.json({ success: false });
});

/* ===============================
   Customer APIs
================================ */

// add customer
app.post("/customers", (req, res) => {
  const newCustomer = {
    id: Date.now(),
    ...req.body,
  };
  customers.push(newCustomer);
  res.json({ message: "Customer added" });
});

// get customers
app.get("/customers", (req, res) => {
  res.json(customers);
});

// delete customer
app.delete("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  customers = customers.filter((c) => c.id !== id);
  res.json({ message: "Customer deleted" });
});

/* ===============================
   Order APIs
================================ */

// add order
app.post("/orders", (req, res) => {
  const newOrder = {
    id: Date.now(),
    ...req.body,
  };
  orders.push(newOrder);
  res.json({ message: "Order added" });
});

// get orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

/* ===============================
   Gallery upload
================================ */

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// upload image
app.post("/upload", upload.single("image"), (req, res) => {
  res.json({ image: req.file.filename });
});

// get gallery images
app.get("/gallery", (req, res) => {
  const files = fs.readdirSync("uploads");
  res.json(files);
});

/* =============================== */

app.listen(5000, () => {
  console.log("Server running on port 5000");
});