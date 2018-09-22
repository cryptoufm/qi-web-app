pragma solidity ^0.4.17;

import './Qi'

contract qiRegistry {

  // Mapping between profile and Q'i's it created
  mapping (address => address[]) public emitters;

  // Mapping between profile and Q'i's it owns
  mapping (address => address[]) public receivers;

  function validation(address qiAddress) private{
    // Function for accessing Qi contract and verifying owner
    Qi q = Qi(qiAddress);
		require(msg.sender == q.getOwner());
    return true
  }

  function setEmmiter(address qiAddress) public{
    // Validate that the message sender equals the Q'i' owner
    require(validation(qiAddress));
    // Maps the Qi address to the Qi creator
    emitters[msg.sender].push(qiAddress);
  }

  function setReceiver(address qiAddress, address receiverAddress) public{
    // Validate that the message sender equals the Q'i' owner
    require(validation(qiAddress));
    // Maps Qi address to the receiver's Qi list
    receivers[receiverAddress].push(qiAddress);
  }

  // Returns array of emitter Q'i's
  function getEmitterQis(address emitterAddress){
    return emitters[emitterAddress]
  }

  // Returns array of receiver Q'i's
  function getReceiverQis(address receiverAddress){
    return receivers[receiverAddress]
  }

}
