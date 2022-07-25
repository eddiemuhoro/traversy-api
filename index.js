import express from 'express'
import dotenv from "dotenv"
dotenv.config()
import router from './routes/goalRoutes.js'
import connectDB from './config/db.js'
const port= process.env.PORT || 5000
connectDB()
const app = express()

//accepting body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', router)
app.listen(port, () => console.log(`Listening on port ${port}`))


