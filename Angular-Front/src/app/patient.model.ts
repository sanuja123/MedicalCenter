export interface Patient{
    id:String,
    reg_No:String;
    name:String;
    age:Number;
    address:String;
    mother: { name:String; job:String; age:Number;};
    father: { name:String; job:String; age:Number;};
    diseases:[String];
    
}