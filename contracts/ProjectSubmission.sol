// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0;
/***
 * @contract
 */

interface IMemberContract{
    function isMember(address)external returns(bool);
}
contract ProjectSubmission {

    IMemberContract MemberContract;
    address MemberContractAddress;
    
    struct Project {
        string name;
        uint256 id;
        bool approved;
        uint256 index;
        uint256 votes;
    }

    mapping (address => Project) public projectSubmitted;

    Project[] public approvedProjects;
    Project[] public pendingProjects;

    event ProjectSubmitted(address indexed _submittor, string name, uint256 id);
    event ProjectApproved(address indexed _approver, string _name, uint256 _index);
    event VoteReceived(address indexed _voter, uint256 _votes);

    constructor(address _memberContract){
        MemberContractAddress = _memberContract;
        MemberContract = IMemberContract(_memberContract);
    }

    function submitProject(
        string memory _name,
        uint256 _id
        )external {
            require(_id > 0, "Invalid ID");
            require(projectSubmitted[msg.sender].id == 0, "Already submitted");
            Project memory _project;
            _project.name = _name;
            _project.id = _id;
            _project.index = pendingProjects.length;
            projectSubmitted[msg.sender] = _project;
            pendingProjects.push(projectSubmitted[msg.sender]);
            emit ProjectSubmitted(msg.sender, _name, _id);
        }

    function approveProject(
        address _submittor
    )external {
        require(projectSubmitted[_submittor].id > 0, "No project");
        require(_submittor != msg.sender, "Cannot self approved");
        require(MemberContract.isMember(msg.sender), "Not Approver");
        projectSubmitted[_submittor].approved = true;
        projectSubmitted[_submittor].index = approvedProjects.length;
        approvedProjects.push(projectSubmitted[_submittor]);
        (string memory _name, uint256 _id, uint256 _index) = (projectSubmitted[_submittor].name, projectSubmitted[_submittor].id, projectSubmitted[_submittor].index);
        emit ProjectApproved(msg.sender, _name, _id);
        updatePendingIfApproved(_index);
    }

    function updatePendingIfApproved(uint256 _index) internal {
        require(_index < pendingProjects.length, "index out of bound");
        for (uint256 i = _index; i < pendingProjects.length -1; i++){
            pendingProjects[i] = pendingProjects[i+1];
            pendingProjects[i].index = i;
        }
        pendingProjects.pop();
    }

    function getApproved()external view returns(Project[] memory){
        return approvedProjects;
    }

    function getPending()external view returns(Project[] memory){
        return pendingProjects;
    }
    
    function setMemberContract(address _contract) external {
        MemberContract = IMemberContract(_contract);
        MemberContractAddress = _contract;
    }

    function projectVote(uint256 _index, uint256 _votes)external {
        require(_index < pendingProjects.length, "index out of bound");
        pendingProjects[_index].votes += _votes;
        emit VoteReceived(msg.sender, _votes);
    }

}



