pragma solidity ^0.4.17;

// Collection's qis, class definition.
contract Qi{
    address public collectionAddr;
    uint public qiCreationTime;
    string public title;
    string public other;
    mapping (address => uint256) issueDates;

    constructor (string _title, string _other) public {
        collectionAddr =  msg.sender;
        qiCreationTime = block.timestamp;
        title = _title;
        other = _other;
    }

    function newIssueDate(address qiReceiver) public {
        issueDates[qiReceiver] = block.timestamp;
    }

    function getOwner() public view returns (address) {
        return collectionAddr;
    }
}
