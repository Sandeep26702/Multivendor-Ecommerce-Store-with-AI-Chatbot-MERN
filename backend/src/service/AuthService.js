const Seller = require("../models/Seller");
const VerificationCode = require("../models/VerificationCode");
const sendVerificationEmail = require("../util/SendEmail");
const generateOTP = require("../util/generateOtp");

class AuthService{

    async sendLoginOTP(email){

        const SIGNIN_PREFIX="signin_";

        if(email.startsWith(SIGNIN_PREFIX)){
        
        const  Seller = await Seller.findOne({email:email});
        if(!Seller) throw new Error("User not found");
        }

            const exitingVerificationCode= await VerificationCode.findOne({email:email});

            if(exitingVerificationCode){
          
              await VerificationCode.deleteOne({email:email});
            
        }

        const otp=generateOTP();
        const VerificationCode= new VerificationCode({otp,email});
        await VerificationCode.save();

        // send email to user
        const subject="Your Login/signup OTP";
        const body= `<p>Your OTP for login is: <b>${otp}</b></p>`;

        await sendVerificationEmail(email,subject,body);


        }
    }

module.exports=new AuthService();
