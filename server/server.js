import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());  // Yahan pe fix kiya

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
try {
    mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
} catch (error) {
    console.log("Error: ", error);
}

// Defining routes
app.use("/book", bookRoute);
app.use("/users", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
