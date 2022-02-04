const Blockchain = require("./src/blockhain");

globalThis.difficulty = 5;

globalThis.blockchain = new Blockchain();

global.transactions = [];