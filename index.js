const express = require('express')
const app = express()

let reqCount = 0

app.get('/', (req, res) => {
  reqCount++
  res.status(200).send(`Request - ${reqCount}`)
}) 

app.listen(process.env.PORT || 6000, () => console.log(`Server is running on ${process.env.PORT || 6000} port...`))