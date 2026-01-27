pragma solidity ^0.8.0;

contract UserRegistry {
    struct User {
        string name;
        uint256 age;
        bool isActive;
    }

    mapping(address => User) public users;

    function registerUser(string memory _name, uint256 _age) public {
        users[msg.sender] = User(_name, _age, true);
    }
}