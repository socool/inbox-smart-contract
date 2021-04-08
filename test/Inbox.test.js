const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);
const {interface, bytecode} = require('../compile');

class Car{
    park(){
        return "stopped";
    }

    drive(){
        return "vroom";
    }
}

let car;
let accounts;
let inbox;

beforeEach(async ()=>{
    car = new Car();
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    // Use one of those accounts to deploy
    // the contract
    console.log(JSON.parse(interface));
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi there!']})
        .send({from: accounts[0], gas:'1000000'});
})

describe('Car',  ()=>{
    it('can park',()=>{
        assert.strictEqual(car.park(),'stopped');
    })

    it('can drive',()=>{
        assert.strictEqual(car.drive(),'vroom');
    })
})

describe('Inbox',()=>{
    it('deploys a contract', ()=>{
        assert.ok(inbox.options.address);
    });
})