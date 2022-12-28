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
// Express body-parser is an npm module used to process data sent in an HTTP request body SO USED TO ACCESS POST DATA. It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body.
app.use(bodyParse.json());
app.use(bodyParse.urlencoded());
//to identify the folder that we gone use for static assets and serve static files
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))

//It helps you to create object from the form input
//body-parser is an NPM package that parses incoming request bodies in a middleware before your handlers,
//app.use(bp.json()) looks at requests where the Content-Type: application/json header is present and transforms the text-based JSON input into JS-accessible variables under req.body. app.use(bp.urlencoded({extended: true}) does the same for URL-encoded requests. the extended: true precises that the req.body object will contain values of any type instead of just strings.
//------------------------------------

//import pages module
var router = require('./routes/pages')

app.use("/", router)

app.listen(port, () => {
    console.log("running on port 4200")
} )

