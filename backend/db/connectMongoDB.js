import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/rant-beach`
        );
        console.log(
            `\nMONGODB connected successfully!\nDB HOST: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED ", error);
        process.exit(1);
    }
};

export default connectDB;
