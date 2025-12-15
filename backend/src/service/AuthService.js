const Seller = require("../model/Seller");
const VerificationCode = require("../model/VerificationCode");
const sendVerificationEmail = require("../util/sendEmail");
const generateOTP = require("../util/generateOtp");


class AuthService{

    async sendLoginOTP(email){

        const SIGNIN_PREFIX="signin_";

        if(email.startsWith(SIGNIN_PREFIX)){
            email = email.substring(SIGNIN_PREFIX.length);
        }
        
        const seller = await Seller.findOne({email:email});
        if(!seller) throw new Error("User not found");

            const exitingVerificationCode= await VerificationCode.findOne({email:email});

            if(exitingVerificationCode){
          
              await VerificationCode.deleteOne({email:email});
            
        }

        const otp=generateOTP();
        const verificationCode= new VerificationCode({otp,email});
        await verificationCode.save();

        // send email to user
        const subject="Your Login/signup OTP";
        const body= `<p>Your OTP for login is: <b>${otp}</b></p>`;

        await sendVerificationEmail(email,subject,body);
    }
}

module.exports=new AuthService();
