const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || "your-mongodb-uri";
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
        return client.db("your-database-name");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

module.exports = connectDB;