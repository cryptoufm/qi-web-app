pragma solidity ^0.4.17;

import './Qi';

contract qiRegistry {

  // Mapping between profile and Q'i's it created
  mapping (address => address[]) public issuers;

  // Mapping between profile and Q'i's it owns
  mapping (address => address[]) public receivers;

  function validate(address qiAddress) private {
    // Function for accessing Qi contract and verifying owner
    Qi q = Qi(qiAddress);
		require(msg.sender == q.getOwner());
    return true;
  }

  function registerEmmiter(address qiAddress) public {

    require(validate(qiAddress));
    // Maps the Qi address to the Qi creator
    emitters[msg.sender].push(qiAddress);
  }

  function registerReceiver(address qiAddress, address receiverAddress) public {

    require(validate(qiAddress));
    // Maps Qi address to the receiver's Q'i' list
    // Sets the date in which the Q'i' was emmited
    receivers[receiverAddress].push(qiAddress);
    Qi q = Qi(qiAddress);
    q.newEmissionDate(receiverAddress);
  }

  function getEmitterQis(address emitterAddress) public view returns (address[]){
    return emitters[emitterAddress];
  }

  function getReceiverQis(address receiverAddress) public view returns (address[]) {
    return receivers[receiverAddress];
  }

}
