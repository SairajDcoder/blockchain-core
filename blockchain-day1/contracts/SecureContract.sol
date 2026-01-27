pragma solidity ^0.8.0;

contract SecureContract {
    address public owner;
    uint256 public data;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    function updateData(uint256 _newData) public onlyOwner {
        data = _newData;
    }
}