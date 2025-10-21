import mongoose from "mongoose"; 
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URL= process.env.MONGO_URL;
const connetDB = async() => { 
try{
     await   mongoose.connect(MONGO_URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
     }); 
console.log('conneted to Database.....') 
}catch(error)
{ 
      console.log(error)
 }
 }
 export default connetDB