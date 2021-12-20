const express = require('express')
const axios = require('axios')
const app = express();

app.get('/',async (req, res) => {
   const response = await axios.get('https://ico-fullstack-test.herokuapp.com/v1/histograma') 
   return res.json(response.data)
 })


//localhost:3333
app.listen(3333)
console.log("app on")