import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import stateRoutes from "./routes/stateRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.use("/api/users", userRoutes);
app.use("/api/states", stateRoutes);

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server is running in ${ENV} on port ${PORT}!`));
