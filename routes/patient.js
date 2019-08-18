var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/medical');
var Schema = mongoose.Schema ;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
let patient = require('../controllers/patient');




router.get('/', patient.index);
router.get('/findAll', patient.findAll);
router.get('/findOne/:patientId', patient.findOne);
router.post('/add', patient.add);
router.put('/update/:patientId', patient.update);
router.delete('/remove/:patientId', patient.remove);





// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Please enter a color? ', (value) => {
//     let color = value
//     console.log(`You entered ${color}`);
//     rl.close();
// });





// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("medical");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("patient").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("medical");
//   var myquery = { address: 'Highway 37' };
//   dbo.collection("patient").deleteMany(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     db.close();
//   });
// });

//end

// UserData.find({}, function(err, users) {
//   if (err) throw err;

//   console.log(users);
// });

module.exports = router;
