pragma solidity ^0.4.17;

// App user, class definition.
contract User {
	address public walletOwner = msg.sender;
	uint public userTimestamp = block.timestamp;
	
	string public userName;
	string public birthday;
	address[] public profiles;
	mapping (address=>address[]) public profileByAddress;
	
	constructor (string name, string bday) public {
	    userName = name;
	    birthday = bday;
	    walletOwner;
	    userTimestamp;
	}

	function getProfiles() public view returns (address[]){
		return profiles;
	}

	function getProfileByAddress(address profile) public view returns (address[]){
		return profileByAddress[profile];
	}
	
	function setProfile(address profile) public {
	    profiles.push(profile);
	}
	
	function kill() public { //self-destruct function, 
	    if(msg.sender == walletOwner) {
            selfdestruct(walletOwner); 
        }
    }
}