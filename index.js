const Blockchain = require("./src/blockchain");
const express = require("express"); 
const morgan = require("morgan");

globalThis.difficulty = 5;

globalThis.blockchain = new Blockchain();

global.transactions = [];

const app = express();
app.use(morgan("dev"));
const port = 8080; 
require("./routes")(app); 

app.listen(port, () => {
    // Log that our server is running in the terminal
    console.log(`Server is listening on http://localhost:${port}/`);
});


