pragma solidity ^0.4.17;

import './Owner.sol';

contract ownerRegistry {

  // Mapping between wallets and Owner contracts
  mapping (address => address) public owners;

  function validate(address ownerAddr) private view returns (bool){
    // Function for accessing Qi contract and verifying owner
    Owner o = Owner(ownerAddr);
		require(msg.sender == o.getOwner());
    return true;
  }

  function registerOwner(address ownerAddr) public {
    require(validate(ownerAddr));
    // Maps the wallet address to the owner address
    owners[msg.sender] = ownerAddr;
  }

  function getOwnerByAddr(address walletAddr) public view returns (address) {
    return owners[walletAddr];
  }

}
