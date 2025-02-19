const mongoose = require('mongoose');
const user =new mongoose.Schema(
    {
        username:{type:String,
        required: true,
        unique:true},
        email:{type:String,
        required: true,
        unique:true},
        password:{type:String,
        required: true,
        },
        role:{type:String,
            default:[]
        }
    }
);   
const profile= new mongoose.Schema(
    {
        firstname:{type:String,
        required: true,
        unique:true},
        lastname:{type:String,
        required: true,
        unique:true},
        age:{type:Number,
        required: true,
        }
    }
);
const activity=new mongoose.Schema(
    {
        lastlogin:{type:Date,
        required: true}
    }
);







module.exports=mongoose.model('user',user);
module.exports=mongoose.model('profile',profile);
module.exports=mongoose.model('activity',activity);
