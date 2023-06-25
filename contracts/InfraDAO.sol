// SPDX-License-Identifier: MIT 

interface IVote {
    function projectVote(uint256 index, uint256 votes) external;
}

pragma solidity ^0.8.0;
contract InfraDAO {
    IVote ProjectVote;
    event NewMember(address indexed member);
    event VoteSubmitted(address indexed voter);

    struct Member {
        bool isMember;
        uint256 votesRemaining;
    }

    mapping(address => Member) public members; 

    constructor() {}

    function setProjectVoteContract(address _contract) external{
        ProjectVote = IVote(_contract);
    }
    
    function join() public payable{
        members[msg.sender] = Member(true, msg.value); 
        emit NewMember(msg.sender); 
    }

    function vote(uint256 _index, uint256 _votes) public {
        require(members[msg.sender].isMember, "Not a member");
        require(members[msg.sender].votesRemaining >= _votes, "Insufficient votes");
        ProjectVote.projectVote(_index, _votes);
        emit VoteSubmitted(msg.sender); 
    }

    function isMember(address _member)external view returns(bool){
        return members[_member].isMember;
    }
}