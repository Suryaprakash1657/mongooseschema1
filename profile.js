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
module.exports=mongoose.model('profile',profile);