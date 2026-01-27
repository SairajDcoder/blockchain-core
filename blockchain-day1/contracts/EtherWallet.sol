pragma solidity ^0.8.0;

contract EtherWallet {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    receive() external payable {}

    function withdraw() public {
        require(msg.sender == owner, "Only owner");
        owner.transfer(address(this).balance);
    }
}