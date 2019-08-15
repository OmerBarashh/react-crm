const express = require('express')
const app = express()
const port = 4000

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/DataK", { useNewUrlParser: true })
const Schema = mongoose.Schema
const clientSchema = new Schema({
    name: String,
    email: String,
    firstContact: String,
    emailType: String,
    sold: Boolean,
    owner: String,
    country: String
})
const Client = mongoose.model("Clients", clientSchema)

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.get('/clients', async function (req, res) {
    const data = await Client.find({})
    res.send(data)
})

app.post('/client', async function (req, res) {
    const data = req.body
    const c = new Client(data)
    c.save()
    res.end()
})

app.post('/declare', async function (req, res) {
    const data = req.body
    Client.findOneAndUpdate({
        name: data.name
    }, { $set: { sold: true } }, { new: true }, (err, doc) => {
        if (err) {
            console.log("Something when wrong when updating the data!");
        }
    })
    res.end()
})

app.post('/transfer', async function (req, res) {
    const data = req.body
    Client.findOneAndUpdate({
        name: data.name
    }, { $set: { owner: data.ownerUpdate } }, { new: true }, (err, doc) => {
        if (err) {
            console.log("Something went wrong when updating the data!");
        }
    })
    res.end()
})

app.post('/changeEmailType', async function (req, res) {
    const data = req.body
    Client.findOneAndUpdate({
        name: data.name
    }, { $set: { emailType: data.emailType } }, { new: true }, (err, doc) => {
        if (err) {
            console.log("Something went wrong when updating the data!");
        }
    })
    res.end()
})


app.listen(port, function () {
    console.log("The server is up and running on port " + port)
})


const data = require('./data.json')
for (let i of data) {
    const client = {
        name: i.name,
        email: i.email,
        firstContact: i.firstContact,
        emailType: i.emailType,
        sold: i.sold,
        owner: i.owner,
        country: i.country
    }
    const c = new Client(client)
    c.save()
}
console.log("Finished")