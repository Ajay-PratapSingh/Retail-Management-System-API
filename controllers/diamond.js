const Diamond = require("../models/Diamond");
const db = require('../util/mongoose');

const getAllDiamonds = async (req, res) => {
    try {
        const DiamondList = await Diamond.find();
        res.status(200).json({DiamondList}); // Send the orders list as a response
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' }); // Send a server error response
    }
}

const addDiamond = async (req, res) => {
    const {
        SuppCode,
        ItemName,
        Variety,
        Prefix,
        Group,
        LabelNo,
        BarcodeNo,
        Gross,
        Net,
        Pcs,
        StyleName,
        PcsName,
        CutShap,
        Color,
        Clarity } = req.body;
    try {
        const newDiamond = new Diamond({
            SuppCode,
            ItemName,
            Variety,
            Prefix,
            Group,
            LabelNo,
            BarcodeNo,
            Gross,
            Net,
            Pcs,
            StyleName,
            PcsName,
            CutShap,
            Color,
            Clarity
        })
        await newDiamond.save();
        return res.status(200).json({ success: true });

    } catch (err) {
        console.error(err);
    }
}

const getDiamondbyId = async (req, res) => {
    const diamondID = req.params.id;
    console.log(diamondID);
    try {
        const diamond = await Diamond.findById(diamondID);
        if (!diamond) {
            return res.json({ error: "Diamond does'nt exist" });
        } else {
            console.log(diamond)
            return res.status(200).json(diamond);
        }
    } catch (err) {
        console.error(err);
    }
}

const updateDiamondbyId = async (req, res) => {
    const diamondID = req.params.id;
    const body=req.body;
    try {
        const updatedDiamond = await Diamond.findByIdAndUpdate(diamondID,body);
        if (!updatedDiamond) {
            return res.json({ error: "Diamond does'nt exist" });
        } else {
            console.log(updatedDiamond)
            return res.status(200).json(updatedDiamond);
        }
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getAllDiamonds,
    addDiamond,
    getDiamondbyId,
    updateDiamondbyId,
}