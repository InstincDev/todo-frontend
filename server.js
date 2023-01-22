const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config({ path: "./config/.env" });


const connectDB = require("./config/database");
const homeRoutes = require("./routes/home");
const todoRoutes = require("./routes/todos");


// Middleware
app.set("view engine", "ejs"); // this does something
app.use(express.static("public")); // does something
app.use(express.urlencoded({ extended: true })); // does a thing
app.use(express.json()); // this does something

// Routes
app.use("/", homeRoutes);
app.use("/todos", todoRoutes);

// Connect to Database
connectDB().then(() => {
    // Run Server
    app.listen(process.env.PORT, () => {
        console.log("Server is running, you better catch it!");
    });
});


