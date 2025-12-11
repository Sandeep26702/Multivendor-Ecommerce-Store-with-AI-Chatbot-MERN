const express = require('express');
const connectDB = require('./db/db');

const app = express();

// Middleware (optional)
app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Welcome to Bazar backend system" });
});

const port = 5000;

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await connectDB();   // <-- Correct function call
});
