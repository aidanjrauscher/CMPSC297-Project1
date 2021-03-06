const Block = require("./block");

//define the blockchain class
class Blockchain{

    constructor(){
        this.chain = [new Block(Array(65).join("0"))];
    }

    //return last block on the chain
    getLastBlock(){
        return this.chain[this.chain.length-1];
    }

    //return current length of the chain
    getChainLength(){
        return this.chain.length;
    }

    //add a block to the chain
    addBlock(){
        let newBlock = new Block(this.getLastBlock().hash, global.transactions);
    
        this.chain.push(Object.freeze(newBlock));
    }

    //verify the validity of the chain
    isChainValid(blockchain = this){
        for(let i=1; i<blockchain.chain.length; i++){
            const currentBlock = blockchain.chain[i];

            const prevBlock = blockchain.chain[i-1];

            if(currentBlock.hash!==currentBlock.getHash() ||
                prevBlock.hash!==currentBlock.prevHash){
                
                    return false;
            }

            let checkString = Array(global.difficulty+1).join("0");
            
            if(!currentBlock.hash.startsWith(checkString)){
                return false;
            }
        }

        return true;
    }

    //replace the chain with the new valid version
    replaceChain(newChain){

        if(newChain.length <= this.chain.length) return;

        if(!this.isChainValid(newChain)) return;

        this.chain = newChain;
    }

    prettify() {

        let chainString = "";

        for (let i = 0; i < this.chain.length; i++) {
            chainString += this.chain[i].prettify();
            chainString += "<br><hr>";
        }

        return chainString;
    }

}

module.exports = Blockchain;
