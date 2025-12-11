require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { PositionsModel } = require("./model/PositionsModel");
const { HoldingsModel } = require("./model/HoldingsModel");
const { OrdersModel } = require("./model/OrdersModel");
const authRoute = require("./routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// CORS: allow frontend (3000) and dashboard (3001) to send cookies
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Data routes
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    if (!name || !qty || !price || !mode) {
      return res.status(400).send("Missing required fields");
    }
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.status(201).send("Order saved!");
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).send("Internal Server Error");
  }
});

// ✅ New route to fetch all orders
app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).send("Internal Server Error");
  }
});

// ✅ Logout route: clears JWT cookie
app.post("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ success: true, message: "Logged out" });
});

// Auth routes
app.use("/", authRoute);

// Connect then start
mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected!");
    app.listen(PORT, () => console.log(`App started on port ${PORT}`));
  })
  .catch((err) => console.error("DB connection failed:", err));