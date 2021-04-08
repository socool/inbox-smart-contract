const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

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

beforeEach(async ()=>{
    car = new Car();
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    // Use one of those accounts to deploy
    // the contract
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
        console.log(accounts);
    });
})