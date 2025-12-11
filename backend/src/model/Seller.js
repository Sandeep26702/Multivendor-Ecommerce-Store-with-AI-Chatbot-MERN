const {default: mongoose } = require("mongoose");

const sellerSchema=new mongoose.Schema({
    sellerName:{
        type:String,
        required: true
    },
    mobile:{
        type:Number,
        required:true,
        unque:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
       type:String,
       required:true,
       select:false
    },
    businessDetails:{
        businessName:{
         type:String,
        },
        businessEmail:{
         type:String,
        },
        businessMobile:{
         type:Number,
        },
        businessAddress:{
            type:String,
        }

    },
    bankDetails:{
        accountNumber:{
            type:String,

        },
        bankName:{
            type:String,
        },
        ifscCode:{
            type:String,    
        }
    
    },
    pincupAddress:{
        type:mongoose.Schema.Types.ObjectId,
        Ref:'Address'
    },
    GSTIN:{
        type:String,    
        required:true,
    },
    role:{
        type:String,
        enum:['UerRoles.SELLER'],
        default:UserRoles.SELLER
    },
    accountStatus:{
        type:String,
        enum: [AccountStatus.PENDING_VERIFICATION,      
       AccountStatus .ACTIVE,
       AccountStatus .INACTIVE,
      AccountStatus  .SUSPENDED,
      AccountStatus  .DEACTIVATED,
       AccountStatus .BANNED, 
       AccountStatus .CLOSED],
        default:'AccountStatus.PENDING_VERIFICATION'
    }
},{ timestamps:true });

const Seller = mongoose.model('Seller',sellerSchema);

module.exports = Seller;