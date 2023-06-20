import mongoose from('mongose');
import colors from ('colors');



const connectDB=async()=>{
  try {
    const conn=await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connecting to MongoDB Database${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in Mongodb ${error}.bgRed.white`);
  }
}

export default connectDB;