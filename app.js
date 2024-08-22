require("dotenv").config(); // Load environment varables from a .env file into process.env

const express = require("express"); //Import Express framework

const mongoose = require("mongoose"); // Import Mongoose for MongoDB interactions

const cors = require("cors");

const app = express(); // spining up the express framework server

const port = 3000; // Define the port number for the server

// CORS (Cross-Origin Resource Sharing) when the frontend and backend are from different origins (domains, ports or protocols) and the backend hasnt been configured to accept requests from the frontend origin
app.use(cors());

const taskRouter = require("./routes/taskRouter"); // Import the taskRouter for task-related routes
const notFound = require("./middlewares/notFound"); //Import a middleware to handle 404 Not Found errors

app.use(express.json()); // Middleware to parse incoming JSON requests, from postman allowing access to the req.body

app.use("/api/task", taskRouter); //Mount the taskRouter at /api/task, all task-related routes start with /api/task

app.use(notFound); // Use the custom 404middleware for handling unmatched routes

const start = async () => {
  try {
    // Attemp to connect to MongoDB using Monoose
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");

    // Start the server and listen on the specified port
    app.listen(port, () => {
      console.log(`Server is runing on PORT ${port}`);
    });
  } catch (error) {
    //log the error if the database connection fails
    console.log(error);
    console.log("Unable to connect");
  }
};

start();

//Mongoose is an ODM (Object Data Modelling) library for MongoDB and Node.js.

//MongoDB os a NoSQL database that stores data in a flexible , JSON like format.

//afedayo
//V3vUiYxJ9AOvLLw3
//mongodb+srv://afedayo:V3vUiYxJ9AOvLLw3@cluster0.t38xx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
