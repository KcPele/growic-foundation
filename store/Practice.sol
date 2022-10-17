// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

error NotOwner(address sender);
contract Practice {
    address immutable owner;

    modifier onlyOwner {
        if(msgSender() != owner){
            revert NotOwner(msgSender());
        }
        _;
    }
    constructor() {
        owner = msg.sender;
    }


    function msgSender()public view  returns (address) {
        return msg.sender;
    }
}