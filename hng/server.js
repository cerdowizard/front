const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    console.log(req.body.name);
})

app.get('/post', (req,res)=>{
  
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("connected to the server on port http://localhost:5000");
})