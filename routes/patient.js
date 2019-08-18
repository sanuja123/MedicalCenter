var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/medical');
var Schema = mongoose.Schema ;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
let patient = require('../controllers/patient');
=======
const Patient = require('../models/patient');
//const jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
//const config = require('../config/database');
//const passport = require('passport');




//show all patient in database
router.get('/',function(req,res){
    Patient.find((err,patient)=>{
        if(err){
            console.log(err);
        }  
        else{
            res.json(patient);
        }

    });
});

//show a patient of particular reg number
router.get('/:id',function(req,res){
    Patient.findById(req.params.id,(err,patient)=>{
        if(err){
            console.log(err);
        }  
        else{
            res.json(patient);
        }

    });
});


//save new patient information
router.post('/add', function(req, res) {

    const newPatient = new Patient({
        reg_No:req.body.reg_No,
        name:req.body.name,
        age:req.body.age,
        address:req.body.address,
        mother:req.body.mother,
        father:req.body.father,
        diseases:req.body.diseases,
    });
    newPatient.save()
        .then(newPatient=>{
            res.status(200).json({'newPatient':'Added successfully'})
        })
        .catch(err => {
            res.status(400).send('Failed to create new Record');
        });

});




//update patient information
router.post('/update/:id',function(req,res){

    Patient.findById(req.params.id,function(err,patient){
        if(!patient){
          return next(new Error('Could not load document'));
        }
        else{
            patient.reg_No=req.body.reg_No,
            patient.name=req.body.name,
            patient.age=req.body.age,
            patient.address=req.body.address,
            patient.mother=req.body.mother,
            patient.father=req.body.father,
            patient.diseases=req.body.diseases,

            patient.save().then(patient=>{
                res.json('Update done');
            }).catch(err=>{
                res.status(400).send('Failed to update Record');
            });
        }

    });
});

//remove patient information
router.post('/delete/:id',function(req,res){

    Patient.findByIdAndRemove({_id:req.params.id},function(err,patient){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json('Remove successfully');
        }
        
    });
});
>>>>>>> 9e710a80627944dd89a9b1a7552f96d54e660c3c




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
