const mongoose=require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    customerId: { type: String, required: true },
    datePlaced:{type: Date},
    dateExpected:{type:Date},
    dateDelivered:{type:Date},
    deliveryAddress:{type:String},
    paymentMethod:{type:String},
    deliveryStatus:{type:String},
    discountPercent:{type:Number},
    discountAmount:{type:Number},
    totalPrice:{type:Number},
    quantity:{type:Number},
    serviceId:{type:String},
    gemstoneID:{type:String},
    silverjewelryID:{type:String},
    diamondID:{type:String},
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
module.exports= Order;