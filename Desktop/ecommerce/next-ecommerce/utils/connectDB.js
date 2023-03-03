import mongoose from "mongoose";

const connectDB = () => {
  if(mongoose.connections[0].readyState){
    console.log("already connected.")
    return;
  }

  mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if(err) throw err;
    console.log("connected to mongodb")
  })
}

export default connectDB