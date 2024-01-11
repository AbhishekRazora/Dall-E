import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connection.js';
import router from './routes/index.js';
dotenv.config();

const app=express();

// app.use(cors({origin:'http://localhost:5174'}));
app.use(cors());
app.use(express.json({limit:"50mb"}));

app.use('/api/v1',router)

// app.get('/',(req,res)=>{
//     res.send("hello")
// })


const startServer=async()=>{
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080,()=>{
            return console.log('server has started on port 8080')
        })
    } catch (error) {
        console.log(error)
    }
}

startServer();