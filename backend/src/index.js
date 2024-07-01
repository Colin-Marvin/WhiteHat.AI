const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000;
const connectDB = require("./database/db");
require("dotenv").config();
connectDB();

const app = express();

// Enabling CORS for any unknown origin
app.use(cors());

// Enabling the use of JSON for the body of the request
app.use(express.json());

app.listen(port, () => {
  console.log(`WhiteHat web app listening on port ${port}`);
});
