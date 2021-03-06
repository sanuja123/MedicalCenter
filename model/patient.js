var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({

    reg_No:  {type:String,required:true,unique: true },
    name: {type:String,required:true},
    age:{type:Number,required:true},
    address:{type:String,required:true},
    mobile_No:{type:String},
    mother: {
        name: {type:String,required:true},
        job:{type:String,required:true},
        age:{type:Number,required:true},
    },
    father: {
        name: {type:String,required:true},
        job:{type:String,required:true},
        age:{type:Number,required:true},
    },
    diseases:[String]

});
module.exports = mongoose.model("Patient",patientSchema);








