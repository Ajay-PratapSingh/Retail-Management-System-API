const Silver = require('../models/Silver');
const db = require('../util/mongoose');

const getAllSilvers = async (req, res) => {
    try {
        const SilverList = await Silver.find();
        res.status(200).json({SilverList}); // Send the orders list as a response
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' }); // Send a server error response
    }
}

const addSilver = async (req, res) => {
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
        const newSilver = new Silver({
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
        await newSilver.save();
        return res.status(200).json({ success: true });

    } catch (err) {
        console.error(err);
    }
}

const getSilverbyId = async (req, res) => {
    const silverID = req.params.id;
    console.log(silverID);
    await db();
    try {
        const silver = await Silver.findById(silverID);
        if (!silver) {
            return res.json({ error: "Silver does'nt exist" });
        } else {
            console.log(silver)
            return res.status(200).json(silver);
        }
    } catch (err) {
        console.error(err);
    }
}

const updateSilverbyId = async (req, res) => {
    const silverID = req.params.id;
    const body=req.body;
    try {
        const updatedSilver = await Silver.findByIdAndUpdate(silverID,body);
        if (!updatedSilver) {
            return res.json({ error: "Silver does'nt exist" });
        } else {
            console.log(updatedSilver)
            return res.status(200).json(updatedSilver);
        }
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getAllSilvers,
    addSilver,
    getSilverbyId,
    updateSilverbyId,
}