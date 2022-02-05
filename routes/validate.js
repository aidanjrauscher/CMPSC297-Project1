//check if the blockchain is valid in its current state
function validate(app){
    app.get("/validate", (request, response)=>{
        let isValid = global.blockchain.isChainValid();

        let responseString = "";
        if(isValid){
            responseString = "The blockchain is VALID!";
        }
        else{
            responseString = "The blockchain is INVALID!";
        }

        response.status(200).send(responseString);
    });

}

module.exports = validate;