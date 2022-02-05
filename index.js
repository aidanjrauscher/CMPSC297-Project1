//imports for blockchain and server
const Blockchain = require("./src/blockchain");
const express = require("express"); 
const morgan = require("morgan");

//define global variables for blockchain
global.difficulty = 5;
global.blockchain = new Blockchain();
global.transactions = [];

//create app
const app = express();
//use morgan logging for app
app.use(morgan("dev"));
//set port to 8080
const port = 8080; 
//load all pre-defined path from routes/
require("./routes")(app); 

//run server to listen to port and defined paths
app.listen(port, () => {
    // Log that our server is running in the terminal
    console.log(`Server is listening on http://localhost:${port}/`);
});


