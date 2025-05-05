// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract Trakteer {
    address public owner;

    event Traktir(address indexed _sender, uint256 _amount);

    constructor() {
        owner = msg.sender;
    }

    function traktir(uint256 amount) external payable{
        require(address(msg.sender).balance >= amount, "Insufficient balance");

        require(msg.value == amount, "Incorrect Ether value sent");

        payable(owner).transfer(amount);    

        emit Traktir(msg.sender, amount);
    }

    function balance(address account) external view returns (uint256){
        return account.balance;
    }

 
}