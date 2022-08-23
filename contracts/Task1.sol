// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
/**
 *contract saves user balance
 @ balance mapping: stores the users amount that was deposited
 @ deposit function: recieving the amount the user wants to deposit and updates the balance mapping
 @ checkBalance function: helps the user to check the total amount the have deposited
*/

contract Task1 {


    //keeps track of the users balance
    mapping(address => uint256) balance;


    //depositing and storing the users amount to the mapping balance
    function deposit(uint256 amount) public {
        balance[msg.sender] += amount;
    }


    /**
    * it checks the users balance on the mapping and returns it
    */
    function checkBalance() public view returns(uint256){
        return balance[msg.sender];
    }

}