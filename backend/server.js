import express, { urlencoded } from "express";
// const port = 5000;   testing


import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;

import cookieParser from "cookie-parser"; //for validation

///NOTE : keep .js at the back for importing

import { notFound, errorHandler } from "./middleware/errorMiddleware.js"; //import middleware

//mongodb
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js"; //import userRoutes

connectDB(); // connection to MongoDB - mernauth !! 

const app = express();

// to send data - bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(cookieParser());

app.use('/api/users',userRoutes);  // api/users connected to userRoutes 

import path from 'node:path';

// FOR PRODUCTION -> SERVER/DEPLOY READY
if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    //frontend/dist is made static
    app.use(express.static(path.join(__dirname,'frontend/dist')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')));

} else {
    //IN DEVELOPMENT
    app.get('/',(req,res) => res.send('Server is ready'));
    //npm run dev. both frontend and backend to be run at port 5000 and 3000
}


//pass middleware to app
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started at port ${port}`));

