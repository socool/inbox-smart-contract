// require('./contracts/Inbox.sol);//bad!
const path = require('path');// for get cross platfrom when get path
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts','inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];