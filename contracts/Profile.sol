pragma solidity ^0.4.17;

contract Profile {
	address[] public qis;
	mapping (address=>address[]) public qisByProfile;
	address private profileOwner;
	uint private profileTimestamp;
	string public profileName;
	string public profileTitle;


	constructor(string name, string title) public {
	    profileOwner=msg.sender;
	    profileTimestamp=block.timestamp;
	    profileName=name;
	    profileTitle=title;
	}

	function getQis() public view returns (address[]){
		return qis;
	}

	function getQiByAddress(address qi) public view returns (address[]){
		return qisByProfile[qi];
	}

	function setQi(address qi) public {
	    qis.push(qi);
	}
}
