const express = require('express');
const connectDB = require('./db/db');
const bodyParser = require('body-parser');

const app = express();

// Middleware (optional)
app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Welcome to Bazar backend system" });
});

app.use(bodyParser.json());

const adminRoutes = require('./routers/AdminRoutes.js');
const sellerRoutes = require('./routers/SellerRoutes.js');
const authRoutes = require('./routers/AuthRoutes.js');



app.use("/auth", authRoutes);
app.use("/sellers", sellerRoutes);
app.use("/admin", adminRoutes);












const port = 5000;

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await connectDB();   // <-- Correct function call
});
