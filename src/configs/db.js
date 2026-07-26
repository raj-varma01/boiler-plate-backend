import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const db_uri = process.env.DB_URI;

export const db_connect = async () => {
    try {
        await mongoose.connect(db_uri);
        console.log(`Database connected successfully...`);
    } catch (error) {
        console.log(`Error in connecting the database: ${error}`);
        process.exit(1);
    }
}