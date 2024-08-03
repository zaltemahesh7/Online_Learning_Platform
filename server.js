const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express({ limit: "50mb" }));

app.use(cors({ origin: process.env.ORIGIN }));

// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.json());

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/protected", require("./routes/protected"));
app.use("/api", require("./routes/TrainerRoutes"));
app.use("/api", require("./routes/trainner"));
app.use("/api", require("./routes/CourseRoute"));
app.use("/api", require("./routes/ReviewRoute"));
app.use("/api", require("./routes/GroupRoute"));
app.use("/api", require("./routes/QuestionRoute"));
app.use("/api", require("./routes/AppointmentRoute"));
app.use("/api", require("./routes/Enquirys"));
app.use("/api", require("./routes/Events"));
app.use("/api", require("./routes/Products"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
