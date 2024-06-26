// APIna by Arvi Klemetti, Riku Piipponen
// MAIN FILE

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3007;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Require Monkey routes
const monkeyRouter = require("./routes/monkeys");
const findMonkeyRouter = require("./routes/findmonkeys");
const idMonkeyRouter = require("./routes/idmonkey");
const delMonkeyRouter = require("./routes/delmonkey");
const updMonkeyRouter = require("./routes/updmonkey");

// Use Monkey routes
app.use("/monkeys", monkeyRouter); // POST
app.use("/findmonkeys", findMonkeyRouter); //GET
app.use("/idmonkey/id", idMonkeyRouter);
app.use("/delmonkey", delMonkeyRouter);
app.use("/monkeys", updMonkeyRouter);

// Function to connect to MongoDB
async function connectToMongoDB(uri) {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

// Connect to MongoDB
connectToMongoDB(MONGODB_URI);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});