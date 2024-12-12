import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        console.log(`\n MongoDB connected successfully DB host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection Error", error)
        process.exit(1)
    }
}

export {
    connectDB
}