// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
/**
 * 
 *contract saves user details
 @ balance mapping: stores the users amount that was deposited
 @ deposit function: recieving the amount the user wants to deposit and updates the balance mapping
 @ checkBalance function: helps the user to check the total amount the have deposited
 @ setUserDetails function: sets user details and can also be used to update there details
 @ getUserDetail function: returns what have been saved by the function above;
*/

error NotcontractOwner();
error HasNotdeposited(string message);
error AmountToSmall(uint256 amount);
contract Task3 {

    //sets the deployer as the contract owner
    address public immutable owner;
    uint256 private constant Fee = 0.01 ether; 
    //struct the will help create a new data type to sore user details
    struct User{
        string name;
        uint256 age;
    }
    // userDetails mapping stores the User struct 
    mapping(address => User) userDetails;
    //keeps track of the users balance
    mapping(address => uint256) balance;


    //modifiers
    modifier onlyOwner() {
       if(msg.sender != owner){
           revert NotcontractOwner();
       }
       _;
    }
    modifier hasDeposited(){
        if(balance[msg.sender] <= 0){
            revert HasNotdeposited("Please you must deposit first using the deposit funcion");
        }
        _;
    }
    modifier checkAmount(uint256 _amount){
        if(_amount < Fee) {
            revert AmountToSmall(_amount);
        }
        _;
    }
    /**
    * These was not stated in the task because you were needed to make research
     *constructor help us to set values during deployment

    */
    constructor() {
        owner = msg.sender;
    }

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

    /**
     *it allows users to set there details an can also update there details
     *
    */
    function setUserDetails(string calldata _name, uint256 _age) public {
        userDetails[msg.sender] = User(_name, _age);
        /**
        * or it can be written as
        @ userDetails[msg.sender].name = _name;
        @ userDetails[msg.sender].age = _age;
        */
        //* userDetails[msg.sender] = User({name: _name, age: _age});
    }



    /**
    * returns the saved user details 
    @ accessing the mapping userDetails will return the struct User with the saved data
    
    */
    function getUserDetail() public view returns(User memory){
        return userDetails[msg.sender];
    }


    function withdraw() public onlyOwner {
        uint256 amt = balance[msg.sender];
        balance[msg.sender] -= amt;
    }

    function addFund(uint256 _amount) public hasDeposited checkAmount(_amount){
       balance[msg.sender] += _amount;
    }

}