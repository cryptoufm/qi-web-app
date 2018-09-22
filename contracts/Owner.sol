pragma solidity ^0.4.17;

// App user, class definition.
contract Owner {
	address public walletOwner;
	string public ownerName;
	address[] public collections;

	constructor (string name) public {
	    walletOwner = msg.sender;
	    ownerName = name;
	    walletOwner;
	}

	function getCollections() public view returns (address[]){
		return collections;
	}

	function getOwner() public view returns (address) {
			return walletOwner;
	}

	function addCollection(address collection) public {
	    require(msg.sender == walletOwner);
	    collections.push(collection);
	}

	function kill() private { //self-destruct function,
	    if(msg.sender == walletOwner) {
            selfdestruct(walletOwner);
        }
    }
}
