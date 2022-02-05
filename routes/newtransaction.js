const Transaction = require("../src/transaction");

//perform a new transaction between two random addresses
function newtransaction(app){
    app.get("/newtransaction", (request, response)=>{
        let transaction = new Transaction();

        global.transactions.push(transaction);

        response.status(200).send(transaction.prettify());
    });
}

module.exports = newtransaction;