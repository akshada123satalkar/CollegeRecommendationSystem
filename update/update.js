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
    let p_id = req.body.p_id
    let obj = {     
        "id":req.body.id,   
        "Name": req.body.Name
        //"percentage": req.body.percentage
    }
    //connect to mongodb
    mcl.connect(url, (err, conn) => {
        if (err)
            console.log("Error in connection ", err)
        else {
            let db = conn.db('CRS')
            db.collection('student').updateOne({p_id : p_id},{$set : obj}, (err) => {
                if (err)
                    res.json({ 'update': 'error' })
                else {
                    console.log('Data updated')
                    res.json({ 'update': 'success' })
                }
            })
        }
    })
})
//export router
module.exports = router
