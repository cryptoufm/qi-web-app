pragma solidity ^0.4.17;

//User contract for profile creation and obtent
contract User {
	
	address[] public profiles;
	mapping (address=>address[]) public profileByAddress; 
	address private walletOwner;
	string public userName;
	string public birthday;
	uint private userTimestamp;
	
	
	constructor (string name, string bday) public {
	    walletOwner=msg.sender;
	    userName=name;
	    birthday=bday;
	    userTimestamp=block.timestamp;
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
}