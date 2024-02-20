const mongoose=require('mongoose');

const connectionOptions = {
	dbName: process.env.MONGODB_DB,
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const connectToDatabase = async () => {
	try {
		await mongoose.connect("mongodb+srv://newuser:mongopassword@cluster0.ohtjm4x.mongodb.net/?retryWrites=true&w=majority", connectionOptions);
		console.log('Connected to MongoDB Atlas');
	} catch (err) {
		console.error('Could not connect to MongoDB Atlas', err);
	}
};

connectToDatabase();
module.exports = connectToDatabase;