import express from 'express'
import mongoose from 'mongoose'
const app = express()
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();
app.use(cors())
import bookRoute from "./route/book.route.js"
const PORT = process.env.PORT || 4000
const MONGO_URI = process.env.MONGO_URI
// connect to MongoDB
try{
    mongoose.connect(MONGO_URI)
    .then(()=>console.log("MongoDB Connected"))
}
catch(error){
  console.log("error: ", error)
}

// defining routes
app.use("/book",bookRoute)

app.listen(PORT, () => {
  console.log(`server is  listening on port ${PORT}`)
})
