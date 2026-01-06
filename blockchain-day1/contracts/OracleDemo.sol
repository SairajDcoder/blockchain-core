// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract OracleDemo {
    uint256 public data;
    address public oracle;

    event DataRequested();
    event DataUpdated(uint256 newData);

    constructor() {
        oracle = msg.sender;
    }

    function requestData() public {
        emit DataRequested();
    }

    function fulfillData(uint256 _data) public {
        require(msg.sender == oracle, "Only oracle can update");
        data = _data;
        emit DataUpdated(_data);
    }
}
