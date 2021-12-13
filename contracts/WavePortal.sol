// SPDX-License-Identifier: UNLICENSED

// version of solidity that we want to use. same as version in hardhat.config.js
pragma solidity ^0.8.4;

//allows console logs for a smart contract
import "hardhat/console.sol";

contract WavePortal{

    // init to 0, stored in contract storage
    uint256 totalWaves;

    event NewWave(address indexed from, uint256 timestamp, string message);

    struct Wave{
        address waver;
        string message;
        uint256 timestamp;
    }

    Wave[] waves;

    constructor(){
        console.log('yo yo yo Im a contract and Im smart, bish');
    }

    //public functions are available to be called on the blockchain
    function wave(string memory _message) public{
        totalWaves+=1;
        console.log('%s has waved with message %s!',msg.sender, _message);

        //store wave data in the array
        waves.push(Wave(msg.sender, _message, block.timestamp));

        emit NewWave(msg.sender, block.timestamp, _message);
    }

    //return array of all our waves
    function getAllWaves() public view returns (Wave[] memory){
        return waves;
    }
    
    function getTotalWaves() public view returns(uint256){
        console.log('We have %d total waves!',totalWaves);
        return totalWaves;
    }
}
