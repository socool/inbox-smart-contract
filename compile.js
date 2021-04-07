// require('./contracts/Inbox.sol);//bad!
const path = require('path');// for get cross platfrom when get path
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'constracts','Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

console.log(solc.compile(source, 1));