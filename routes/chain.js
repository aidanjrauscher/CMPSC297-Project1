function chain(app){
    app.get("/chain", (request, response)=>{
        let chainString = global.blockchain.prettify();

        response.status(200).send(chainString);
    });
}

module.exports = chain;