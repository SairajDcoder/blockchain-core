// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract HelloWorld {
    string public message;

    event MessageUpdated(
        address indexed updater,
        string oldMessage,
        string newMessage,
        uint256 timestamp
    );

    constructor() {
        message = "Hello, Blockchain!";
    }

    function setMessage(string memory _message) public {
        string memory old = message;
        message = _message;

        emit MessageUpdated(
            msg.sender,
            old,
            _message,
            block.timestamp
        );
    }
}
