// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract graphQL{
    //0xC680E2c2351052E91806Ed306fa6a69C5C19300a
    
    uint256 public number;

    event incrementDone(uint256);
    event getNum(uint256);

    function increment() public {
        number++;
        emit incrementDone(number);
    }

    function getNumValue() public view returns(uint256) {
        return number;
    }
}