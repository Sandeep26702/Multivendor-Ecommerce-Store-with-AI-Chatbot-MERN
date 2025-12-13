const sellerService = require("../service/sellerService")

class SellerController{
 
    //bearer token
    async getSellerProfile(req,res){
        try{
             const jwt=req.headers.authorizations.split(" ")[1]
             const seller = await sellerService.getSellerProfile(jwt);

             res.status(200).json(seller);
        } catch (error){
            res.status(error instanceof Error ? 404: 500)
             .jsonn({message:error.messag})

        }
    }


 async createSeller(req,res){
        try{
            const seller= await sellerService.createSeller(req.body)
             res.status(200).json({message:"seller create sucessfully"});
        } catch (error){
            res.status(error instanceof Error ? 404: 500)
             .jsonn({message:error.messag})

        }
    }


    async getAllSeller(req,res){
        try{
            const status=req.query.status
            const sellers= await sellerService.getAllSellers(status);             

             res.status(200).json(seller);
        } catch (error){
            res.status(error instanceof Error ? 404: 500)
             .jsonn({message:error.messag})

        }
    }


    async updateSeller(req,res){
        try{
            const existingSeller= await req.seller
            const sellers= await sellerService.updateSeller(existingSeller,req.body);             
            


             res.status(200).json(seller);
        } catch (error){
            res.status(error instanceof Error ? 404: 500)
             .jsonn({message:error.messag})

        }
    }


    async updateSeller(req,res){
        try{
            await sellerService.deleteSeller(req.params.id);


             res.status(200).json({message:"seller deleted..."});
        } catch (error){
            res.status(error instanceof Error ? 404: 500)
             .jsonn({message:error.messag})

        }
    }

    async updateSellerAccountStatus(req,res){
        try{
            const updateSeller= await sellerService.updateSellerAccountStatus(
                req.params.id,
                req.params.status
            )
            res.status(200).json(updatedSeller);
        }catch (error) {
             res.status(error instanceof Error ? 404: 500)
             .jsonn({message:error.messag})
        }

        }

        async verifyLoginOtp(req,res){
            try{
                const {otp, email} = req.body;
                const seller= await sellerService.getSellerByEmail(email);

                
            }
        }
    }    







