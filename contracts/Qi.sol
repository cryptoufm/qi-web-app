pragma solidity ^0.4.17;

contract Qi {
  address public qiOwner;
  uint public qiCreationDate;

  string public title;
  uint256 public date;
  string public other;
  mapping (address => date) emissionDates;

  constructor (string title, uint256 date, string other) public {
    title = _title;
    
	}

  function newEmissionDate (address receiverAddress) {
    emissionDates[address] = now;
  }

}
