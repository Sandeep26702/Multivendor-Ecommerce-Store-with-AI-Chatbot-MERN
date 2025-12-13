const AuthService = require("../service/AuthService");

class AuthController{

    async sendLoginOTP(req,res){
        try{
            const email=req.body.email
            await AuthService.sendLoginOTP(email);
            res.status(200).json({message:"OTP sent to email successfully"});
        } catch (error){
            res.status(500).json({message:"Failed to send OTP", error:error.message});
        }   
    }
}

module.exports=new AuthController();