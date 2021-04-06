pragma solidity ^0.6.6;

contract Inbox{
    string public message;
    
    constructor(string memory iniitalMessage) public {
        message = iniitalMessage;
    }
    
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
    
    function getMessage() public view returns (string memory){
        return message;
    }
}