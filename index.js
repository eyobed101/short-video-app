import express from "express";
import mongoose from "mongoose";
//App Config
const app = express();
import Vroutes from './routes/Vroutes.js'

const port = process.env.PORT || 9000;
const connection_url = 'mongodb://localhost:27017/short-video-app'

const connect = async () =>{
	try{
		
		await mongoose.connect(connection_url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
		
		
	}
	catch(err){
		console.log(err);
	}
};
 
mongoose.connection.on("disconnected", ()=> {
	console.log("mongo is disconnected!")
})

mongoose.connection.on("connected", ()=> {
	console.log("mongo is connected!")
})

//Middleware
//DB Config
//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello"));
//Listener
app.listen(port, () => {
    connect();
    console.log(`Listening on localhost: ${port}`)
});
