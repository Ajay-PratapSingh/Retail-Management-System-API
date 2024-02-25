const Customer = require('../models/Customer');

const getCustomers = async (req, res) => {
    try {
        const customerList = await Customer.find();
        res.status(200).json(customerList);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

const getCustomerbyId = async (req, res) => {
    const customerID = req.params.id;
    console.log(customerID);
    try {
        const customer = await Customer.findById(customerID);
        if (!customer) {
            return res.json({ error: "Customer does'nt exist" });
        } else {
            console.log(customer)
            return res.status(200).json(customer);
        }
    } catch (err) {
        console.error(err);
    }
}

const addCustomer = async (req, res) => {
    const {name, email, phoneNumber, address } = req.body;
    try {
        const customer = await Customer.findOne({ phoneNumber: phoneNumber });
        if (customer) {
            return res.json({ error: "Number already registered" });
        } else {
            const newCustomer = new Customer({
                name,
                email,
                phoneNumber,
                address
            })
            await newCustomer.save();
            return res.status(200).json({ success: true });
        }
    } catch (err) {
        console.error(err);
    }

}

const updateCustomerbyId = async (req, res) => {
    const customerID = req.params.id;
    const body = req.body;
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(customerID, body);
        if (!updatedCustomer) {
            return res.status(404).json({ message: 'customer not found' });
        }

        res.status(200).json(updatedCustomer);
    }
    catch (err) {
        console.error(err);
    }
}

module.exports = {
    getCustomers,
    getCustomerbyId,
    addCustomer,
    updateCustomerbyId
}