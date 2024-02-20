const mongoose=require('mongoose');

const gemstoneSchema = new mongoose.Schema({
    id:{type:String, default: ""},  
    SuppCode: {type:String, default: ""},
    ItemName: {type:String, default: ""},
    Variety: {type:String, default: ""},
    Prefix: {type:String, default: ""},
    Group: {type:String, default: ""},
    LabelNo: {type:String, default: ""},
    BarcodeNo: {type:String, default: ""},
    Gross: Number,
    Net: Number,
    Pcs: Number,
    StyleName: {type:String, default: ""},
    PcsName: {type:String, default: ""},
    CutShap: {type:String, default: ""},
    Color: {type:String, default: ""},
    Clarity: {type:String, default: ""},
    DiamondSize: Number,
    Packet: {type:String, default: ""},
    StyleGrossWt: Number,
    StyleWt: Number,
    StylePcs: Number,
    IsBase: Boolean,
    AmountOn: Number,
    CostRate: Number,
    CostAmount: Number,
    SalesRate: Number,
    SalesAmount: Number,
    Counter: {type:String, default: ""},
    DesignNo: {type:String, default: ""},
    Remark: {type:String, default: ""},
    Type: {type:String, default: ""},
    Size: {type:String, default: ""},
    Location: {type:String, default: ""},
    Image: {type:String, default: ""},
    MRP: Number,
    SalLabOn: Number,
    SalLabRate: Number,
    SalLabAmt: Number,
    PurLabOn: Number,
    PurLabRate: Number,
    PurLabAmt: Number,
    SalWastPer: Number,
    SalWastWt: Number,
    PurWastPer: Number,
    PurWastWt: Number,
    MCApply: Boolean,
    LabelOrgDate: Date,
    BranchCode: {type:String, default: ""},
    MetalOn: Number,
    PurMetalOn: Number,
    CertificateNo: {type:String, default: ""},
    RFID: {type:String, default: ""},
    SlsWastOn: Number,
    PurWastOn: Number,
    LabourMarkup: Number,
    SalesRateMarkup: Number,
    PromoCode: {type:String, default: ""},
    HUID: {type:String, default: ""},
    HINDI_NAME: {type:String, default: ""},
    COLOUR: {type:String, default: ""},
    SHAPE: {type:String, default: ""},
    WEIGHT_RATI: Number,
    LAB: {type:String, default: ""},
    C_NO: {type:String, default: ""},
    ORIGIN: {type:String, default: ""},
    TREATMENT: {type:String, default: ""},
    TREATMENT_TYPE: {type:String, default: ""},
    QUALITY: {type:String, default: ""},
    LotNo: {type:String, default: ""}
});

const Gemstone = mongoose.models.Gemstone || mongoose.model('Gemstone', gemstoneSchema);
module.exports= Gemstone;
