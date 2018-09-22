pragma solidity ^0.4.17;

import './Collection.sol';

contract collectionRegistry {

  // Mapping between wallets and collections
  mapping (address => address[]) public collections;

  function validate(address collectionAddr) private view returns (bool){
    // Function for accessing Qi contract and verifying owner
    Collection c = Collection(collectionAddr);
		require(msg.sender == c.getOwner());
    return true;
  }

  function registerCollection(address collectionAddr) public {
    require(validate(collectionAddr));
    // Index de senders collection to the wallet address
    collections[msg.sender].push(collectionAddr);
  }

  function getCollectionsByAddr(address walletAddr) public view returns (address[]) {
    return collections[walletAddr];
  }

}
