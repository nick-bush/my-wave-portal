// SPDX-License-Identifier: UNLICENSED

// version of solidity that we want to use. same as version in hardhat.config.js
pragma solidity ^0.8.4;

//allows console logs for a smart contract
import "hardhat/console.sol";

contract WavePortal{

    // init to 0, stored in contract storage
    uint256 totalWaves;

    constructor(){
        console.log('yo yo yo Im a contract and Im smart, bish');
    }

    //public functions are available to be called on the blockchain
    function wave() public{
        totalWaves+=1;
        console.log('%s has waved!',msg.sender);
    }
    
    function getTotalWaves() public view returns(uint256){
        console.log('We have %d total waves!',totalWaves);
        return totalWaves;
    }
}
