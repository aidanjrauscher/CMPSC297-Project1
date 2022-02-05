//mine a new block
function mine(app){
    app.get("/mine", (request, response)=>{
        global.blockchain.addBlock();

        global.transactions = [];

        let msg = `Blocked added: ${global.blockchain.getLastBlock().prettify()}`;
    
        response.status(200).send(msg);
    });
}

module.exports = mine;