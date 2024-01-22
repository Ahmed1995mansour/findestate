import express from 'express'

const app = express()

app.get('/', (req, res)=> {
    res.send('Hello from backend')
})

app.listen(5005, ()=> {
console.log('Server is listening on port 5005')
})