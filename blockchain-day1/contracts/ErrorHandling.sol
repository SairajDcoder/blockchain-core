pragma solidity ^0.8.0;

contract ErrorHandling {
    uint256 public balance = 100;

    function withdraw(uint256 _amount) public {
        // Require is used for input validation
        require(_amount <= balance, "Insufficient funds");
        balance -= _amount;

        // Assert is used for internal invariants
        assert(balance <= 100);
    }
}