const express = require('express')
const bodyParse = require('body-parser')
const path = require('path')
const exp = require('constants')
const { send } = require('process')
const port = 4200
const app = express()

//-----------settings------------
app.set("view engine", 'ejs')

//ejs points to view folder
app.set('views', path.join(__dirname, 'views'))
//-------------------------------

//-----------used middlware-----------

app.use(bodyParse.json());
app.use(bodyParse.urlencoded());

app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'node_modules' ,'bootstrap' ,'dist' ,'css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules' ,'bootstrap' ,'dist' ,'js')))


var router = require('./routes/pages')

app.use("/", router)

app.listen(port, () => {
    console.log("running on port 4200")
} )

