const Transaction = require("../src/transaction");

//display transaction history of the blockchain
function listtransactions(app){
    app.get("/listtransactions", (request, response)=>{
        
        let textString = "";

        for(let i=0; i<global.transactions.length; i++){
            textString += global.transactions[i].prettify();
        }

        response.status(200).send(textString);
        
        });
    }

module.exports = listtransactions;