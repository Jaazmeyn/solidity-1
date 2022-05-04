// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract NetworkingPortal {
    uint256 totalContacts; //state variale is stored in contract storage

    constructor() {
        console.log("Jooo I'm such a smart contract, I can prove your network :D");
    }

    function contact() public {
        totalContacts += 1;
        console.log("%s has connected!", msg.sender); //msg.sender => wallet adress of the person who calles the function
        // allConnections.push(msg.sender);
        // console.log(allConnections, "array of all connections"); //msg.sender => wallet adress of the person who calles the function

    }


    function getTotalcontacts() public view returns (uint256) {
        console.log("You have %d total connection/s!", totalContacts);
        return totalContacts;
    }
}