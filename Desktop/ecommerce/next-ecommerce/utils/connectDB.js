import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URL

const connectDB = () => {
    if(mongoose.connections[0].readyState){
        console.log('Already connected.')
        return;
    }
    mongoose.connect(MONGODB_URI)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.error("Error connecting to database:", err);
    });
}


export default connectDB
