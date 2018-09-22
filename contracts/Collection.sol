pragma solidity ^0.4.17;

// User's collection of qis, class definition.
contract Collection {
  // A collection's attributes.
  address public walletOwner;
  string public collectionAlias;
	string public collectionTitle;

	constructor(string _title, string _alias) public { // A collection's constructor.
	    walletOwner = msg.sender;
	    collectionTitle = _title;
	    collectionAlias = _alias;
	}

	// A collection's methods.
	function getCollectionInfo() public view returns (string, string){
		return (collectionAlias, collectionTitle);
	}

  function getOwner() public view returns (address) {
			return walletOwner;
	}
}
