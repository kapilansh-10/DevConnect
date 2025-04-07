const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors")
const userRouter = require('./routes/users')

app.use(cors()); // Enables frontend to call backend from a different origin (useful for local dev)
app.use(express.json()); // For JSON body parsing

app.get('/', (req, res) => {
    res.send("DevConnect backend is live!")
})

app.use('/users', userRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))