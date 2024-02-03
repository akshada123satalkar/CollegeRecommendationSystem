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
router.post("/student", (req, res) => {
    let obj = {
        //     "id":req.body.id,
        //     "Name": req.body.Name,
        //     "E-mail":req.body.email,
        //     "Password":req.body.password,
        //     "Address":req.body.address,
        //     "12th":req.body.hsc,
        //     "MHTCET":req.body.cet
        "userName": req.body.userName,
        "email": req.body.email,
        "password": req.body.password
        // "percentage": req.body.percentage,
        //   "p_cost": req.body.p_cost
    }
    //connect to mongodb
    mcl.connect(url, (err, conn) => {
        if (err)
            console.log("Error in connection ", err)
        else {
            let db = conn.db('CRS')
            db.collection('student').insertOne(obj, (err) => {
                if (err)
                    res.json({ 'insert': 'error' })
                else {
                    console.log('Data inserted')
                    res.json({ 'insert': 'success' })
                }
            })
        }
    })
}),
router.post('/login', (req, res) => {
    mcl.connect(url, function(err, db) {
      if (err) throw err;
      const dbo = db.db("CRS");
      const { userName, password } = req.body;
      console.log(userName);
      console.log(password);
      dbo.collection("student").findOne({ userName }, function(err, result) {
        if (err) throw err;
        if (result && result.password === password) {
          res.send({ success: true });
        //  alert("login successs");
        console.log("login success")
        } else {
            console.log("login failed");
          res.status(401).send({ error: 'Invalid username or password' });
        }
        db.close();
      });
    });
  });
    /*router.post("/college", (req, res) => {
        let obj = {
            "Name": req.body.Name,
            "cut-off":req.body.cut-off,
            "Region":req.body.Region
         //   "p_cost": req.body.p_cost
        }
        //connect to mongodb
        mcl.connect(url, (err, conn) => {
            if (err)
                console.log("Error in connection ", err)
            else {
                let db = conn.db('CRS')
                db.collection('colleges').insertOne(obj, (err) => {
                    if (err)
                        res.json({ 'insert': 'error' })
                    else {
                        console.log('Data inserted')
                        res.json({ 'insert': 'success' })
                    }
                })
            }
        })
    })*/
    //export router
    module.exports = router
