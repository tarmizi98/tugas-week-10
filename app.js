require("dotenv").config();
const express = require('express')
const router = require("./routes")
const cors = require("cors")


const app = express()
const port = 3000;
const errorHandler = require("./middlewares/errorhandler.js")


app.use(express.static('uploads'))

//sharing resources
app.use(cors())

//Middleware untuk menerima json
app.use(express.json());

//Middleware untuk menerima urlencoded
app.use(express.urlencoded({extended: false}))

app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})