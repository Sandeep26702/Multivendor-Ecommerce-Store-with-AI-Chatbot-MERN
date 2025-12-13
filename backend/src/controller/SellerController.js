const VerificationCode = require("../model/VerificationCode");
const sellerService = require("../service/SellerService");
const jwtProvider = require("../util/jwtProvider");
const UserRoles = require("../domain/UserRole");

class SellerController{
 
    //bearer token
    async getSellerProfile(req,res){
        try{
             const jwt=req.headers.authorization.split(" ")[1]
             const seller = await sellerService.getSellerProfile(jwt);

             res.status(200).json(seller);
        } catch (error){
            res.status(error instanceof Error ? 404: 500)
             .json({message:error.message})

        }
    }


 async createSeller(req,res){
        try{
            const seller= await sellerService.createSeller(req.body)
             res.status(200).json({message:"seller create sucessfully"});
        } catch (error){
            res.status(error instanceof Error ? 404: 500)
             .json({message:error.message})

        }
    }


    async getAllSeller(req,res){
        try{
            const status=req.query.status
            const sellers= await sellerService.getAllSellers(status);             

             res.status(200).json(sellers);
        } catch (error){
            res.status(error instanceof Error ? 404: 500)
             .json({message:error.message})

        }
    }


    async updateSeller(req,res){
        try{
            const existingSeller= await req.seller
            const sellers= await sellerService.updateSeller(existingSeller,req.body);             
            


             res.status(200).json(sellers);
        } catch (error){
            res.status(error instanceof Error ? 404: 500)
             .json({message:error.message})

        }
    }


    async deleteSeller(req,res){
        try{
            await sellerService.deleteSeller(req.params.id);


             res.status(200).json({message:"seller deleted..."});
        } catch (error){
            res.status(error instanceof Error ? 404: 500)
             .json({message:error.message})

        }
    }

    async updateSellerAccountStatus(req,res){
        try{
            const updateSeller= await sellerService.updateSellerAccountStatus(
                req.params.id,
                req.params.status
            )
            res.status(200).json(updateSeller);
        }catch (error) {
             res.status(error instanceof Error ? 404: 500)
             .json({message:error.message})
        }

        }

        async verifyLoginOtp(req,res){
            try{
                const {otp, email} = req.body;
                const seller= await sellerService.getSellerByEmail(email);

                const verificationCodeDoc=await VerificationCode.findOne({email});

                if(!verificationCodeDoc || verificationCodeDoc.otp!=otp){
                    throw new Error("Invalid OTP")
                }

                const token=jwtProvider.createJwt({email});

                const authResponse={
                    message:"Login Success",
                    jwt:token,
                    role:UserRoles.SELLER
                }

                return res.status(200).json(authResponse); 

            }catch (error){
                 res.status(error instanceof Error ? 404: 500)
             .json({message:error.message})

            }

            }
        }

        module.exports=new SellerController();
        







