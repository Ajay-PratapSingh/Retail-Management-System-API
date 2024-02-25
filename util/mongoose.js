const mongoose=require('mongoose');
require('dotenv').config({ path: './.env.local' });

const connectionOptions = {
	dbName: process.env.MONGODB_DB,
};

const connectToDatabase = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, connectionOptions);
		console.log('Connected to MongoDB Atlas');
	} catch (err) {
		console.error('Could not connect to MongoDB Atlas', err);
	}
};

connectToDatabase();
module.exports = connectToDatabase;