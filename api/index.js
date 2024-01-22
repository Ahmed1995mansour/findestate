import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config()
mongoose.connect(process.env.MONGODB_URI).then(()=> {
    console.log('Connected to DB')
}).catch((error) => console.log(error))

const app = express()

app.get('/', (req, res)=> {
    res.send('Hello from backend')
})

app.listen(5005, ()=> {
console.log('Server is listening on port 5005')
})