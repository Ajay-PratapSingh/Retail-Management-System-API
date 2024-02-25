const mongoose=require('mongoose');

serviceSchema=new mongoose.Schema(
    {
        name: { type: String, required: true },
        rate:{type: Number},
    }
);

const Service=mongoose.models.Service || mongoose.model('Service', serviceSchema);
module.exports= Service;