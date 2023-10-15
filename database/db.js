import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () =>{
    const DB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-vmpwtv2-shard-00-00.vvefhjc.mongodb.net:27017,ac-vmpwtv2-shard-00-01.vvefhjc.mongodb.net:27017,ac-vmpwtv2-shard-00-02.vvefhjc.mongodb.net:27017/?ssl=true&replicaSet=atlas-ih782g-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
mongoose.connect(DB_URI,{useNewUrlParser:true});
console.log('DB Connected');
    }catch (error){
        console.log('Error in connecting',error.message)
    }
}
export default Connection;