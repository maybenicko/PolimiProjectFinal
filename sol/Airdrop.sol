// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; 
import "@openzeppelin/contracts/access/Ownable.sol"; 

contract Drop is Ownable { 

    //We need Token that we will call, so let's create an interface for our Token;
    IERC20 public token;

    // Bool Mapping To track if each address received an Airdrop
    mapping ( address => bool ) public verification;

    // Amount of tokens to send per address
    uint public dropAmount; 

    // Event creation for Transfer DropToken 
    event TransferDrop ( address _to , uint amount);
    event Withdraw ( address _to, uint amount);

    // Constructor - set token address and dropAmount; Ensure non-zero address
    constructor (address _token, uint _dropAmount) Ownable(msg.sender) { 
        require(_token != address(0), "REJECTED with 0 Address");
        token = IERC20(_token);
        dropAmount = _dropAmount;
    } 

    // Function to claim an Airdrop
    function getDrop () external { 
        require(!verification[msg.sender], "Already claimed Airdrop");
        require(msg.sender != address(0), "Rejected with 0 address");
        verification[msg.sender] = true;
        token.transfer(msg.sender, dropAmount);
        emit TransferDrop(msg.sender, dropAmount);
    }

    // Function to return balance of undropped tokens
    function getBalance () public view onlyOwner returns (uint) { 
        return token.balanceOf(address(this));
    }

    // Function to withdraw remaining tokens
    function withdraw () external onlyOwner {
        uint remainedAmount = getBalance();
        require(remainedAmount > 0 , "Not enough remaining tokens");
        token.transfer(owner(), remainedAmount);
        emit Withdraw(owner(), remainedAmount);
    }

    // Function to change dropAmount
    function dropAmountChange (uint _amount) external onlyOwner { 
        require(_amount > 0 , "REJECTED 0 amount");
        dropAmount = _amount;
    }

    // Function to update the token address
    function changeToken (address _newTokenAddress) external onlyOwner { 
        require(_newTokenAddress != address(0), "Invalid address");
        token = IERC20(_newTokenAddress);
    }

    // Function to reset verification status for an address
    function changeVerification (address _dropper) external onlyOwner { 
        verification[_dropper] = false;
    }
}
