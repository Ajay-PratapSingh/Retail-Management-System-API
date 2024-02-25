const Order = require("../models/Order");

const getAllOrders = async (req, res) => {
    try {
        const OrdersList = await Order.find();
        console.log(OrdersList);
        res.status(200).json(OrdersList);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

const createOrder = async (req, res) => {
    const {
        customerId,
        datePlaced,
        dateExpected,
        dateDelivered,
        deliveryAddress,
        paymentMethod,
        deliveryStatus,
        discountPercent,
        discountAmount,
        totalPrice,
        quantity,
        serviceId,
        gemstoneID,
        silverjewelryID,
        diamondID } = req.body;
    try {
        const newOrder = new Order({
            customerId,
            datePlaced,
            dateExpected,
            dateDelivered,
            deliveryAddress,
            paymentMethod,
            deliveryStatus,
            discountPercent,
            discountAmount,
            totalPrice,
            quantity,
            serviceId,
            gemstoneID,
            silverjewelryID,
            diamondID
        })
        await newOrder.save();
        return res.status(200).json({ success: true });
    }
    catch (err) {
        console.error(err);
    }

}

const updateOrderById=async(req, res)=>{
    const orderId = req.params.id;  
    const body  = req.body;
    try {
        const updatedOrder = await Order.findByIdAndUpdate(orderId, body);
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json(updatedOrder);
    }
    catch (err) {
        console.error(err);
    }
}

const getOrderById = async (req, res) => {
    const orderId = req.params.id;
    try {
        const order = await Order.findById(orderId);
        if (!order) {
            return res.json({ error: "order does'nt exist" });
        }
        else {
            console.log(order)
            return res.status(200).json(order);
        }
    }
    catch (err) {
        console.error(err);
    }

}

const deleteOrderByID = async (req, res) => {
    const orderId = req.params.id;
    try {
        const order = await Order.findByIdAndDelete( orderId );
        if (!order) {
            return res.json({ error: "order does'nt exist" });
        }
        else {
            console.log("Deleted")
            return res.status(200).json({ message: "deleted successfully" });
        }
    }
    catch (err) {
        console.error(err);
    }
}

module.exports = {
    createOrder,
    getOrderById,
    deleteOrderByID,
    updateOrderById,
    getAllOrders
}