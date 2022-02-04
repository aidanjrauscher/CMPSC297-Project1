function generateRandomIPv4(){

    let ipv4 = "";


    ipv4 += Math.floor(Math.random()*255)+1;
    ipv4 += ".";

    ipv4 += Math.floor(Math.random()*255)+1;
    ipv4 += ".";

    ipv4 += Math.floor(Math.random()*255)+1;

    return ipv4;    
}

function generateRandomMoney(){
    return Math.floor(Math.random()*1000000);
}


class Transaction{

    constructor(sendAddress="", recieveAddress="", amount=0){
        this.sendAddress = generateRandomIPv4();
        this.recieveAddress= generateRandomIPv4();
        this.amount = generateRandomMoney();
    }

    prettify(){
        let txtStr = `<div>Host <i>${this.sendAddress}</i> sent mockcoin to <i>${this.recieveAddress}</i> \$${this.amount}.</div>`;
        return txtStr;
    }
}

module.exports = Transaction; 