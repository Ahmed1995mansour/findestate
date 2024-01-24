import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'


dotenv.config()
mongoose.connect(process.env.MONGODB_URI).then(()=> {
    console.log('Connected to DB')
}).catch((error) => console.log(error))

const app = express();

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})

app.listen(5005, ()=> {
console.log('Server is listening on port 5005')
})