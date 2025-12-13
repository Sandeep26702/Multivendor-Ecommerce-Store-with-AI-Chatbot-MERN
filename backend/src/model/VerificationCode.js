const {Schema,default: mongoose} =require("mongoose");

const verificationCodeSchema= new Schema({
 otp:{
    type: String,
 },
 email:{
    type:String,
    required: true
 },

})

const verificationCode=mongoose.model("VerificationCode",verificationCodeSchema)

module.exports=verificationCode;