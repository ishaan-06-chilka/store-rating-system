const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const ratingRoutes = require("./routes/ratingRoutes");
const storeRoutes = require("./routes/storeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/ratings", ratingRoutes);
app.use("/api/stores", storeRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});