import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'

dotenv.config()
mongoose.connect(process.env.MONGODB_URI).then(()=> {
    console.log('Connected to DB')
}).catch((error) => console.log(error))

const app = express()

app.use('/api/user', userRouter)

app.listen(5005, ()=> {
console.log('Server is listening on port 5005')
})