//import modules
const express = require('express')
let mongodb = require('mongodb')
//import url
let url = require('../url')
//create mongoclient
let mcl = mongodb.MongoClient
//create router instance
let router = express.Router()
//create rest api
router.post("/", (req, res) => {
    let obj = {
        "id": req.body.id      
    }
    //connect to mongodb
    mcl.connect(url, (err, conn) => {
        if (err)
            console.log("Error in connection ", err)
        else {
            let db = conn.db('CRS')
            db.collection('student').deleteOne(obj, (err) => {
                if (err)
                    res.json({ 'delete': 'error' })
                else {
                    console.log('Data deleted')
                    res.json({ 'delete': 'success' })
                }
            })
        }
    })
})
//export router
module.exports = router
