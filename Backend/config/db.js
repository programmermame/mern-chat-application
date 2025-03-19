import mongoose from "mongoose";
import { MONGO_URI } from "./dotenv.js";

const connectDatabase = () => {
    try {
        const database = mongoose.connect(MONGO_URI);
        console.log("Successfully connected to MONGODB");

    } catch (error) {
        console.log(`MONGODB connection failed ${error}`);
        process.exit(1);
    }

}

export default connectDatabase;