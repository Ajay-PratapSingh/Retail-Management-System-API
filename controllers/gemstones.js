const Gemstone = require("../models/Gemstone");

const getAllGemstones = async (req, res) => {
    try {
        const gemstoneList = await Gemstone.find();
        res.status(200).json({gemstoneList}); // Send the orders list as a response
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' }); // Send a server error response
    }
}

const addGemstone = async (req, res) => {
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
        const newGemstone = new Gemstone({
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
        await newGemstone.save();
        return res.status(200).json({ success: true });

    } catch (err) {
        console.error(err);
    }
}

const getGemstonebyId = async (req, res) => {
    const gemstoneID = req.params.id;
    console.log(gemstoneID);
    try {
        const gemstone = await Gemstone.findById(gemstoneID);
        if (!gemstone) {
            return res.json({ error: "Gemstone does'nt exist" });
        } else {
            console.log(gemstone)
            return res.status(200).json(gemstone);
        }
    } catch (err) {
        console.error(err);
    }
}

const updateGemstonebyId = async (req, res) => {
    const gemstoneID = req.params.id;
    const body=req.body;
    try {
        const updatedGemstone = await Gemstone.findByIdAndUpdate(gemstoneID,body);
        if (!updatedGemstone) {
            return res.json({ error: "Gemstone does'nt exist" });
        } else {
            console.log(updatedGemstone)
            return res.status(200).json(updatedGemstone);
        }
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getAllGemstones,
    addGemstone,
    getGemstonebyId,
    updateGemstonebyId,
}