// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";


contract  shidoTest {

    bool initialize ;
    address public admin;

    event Deposit(address indexed from, uint amount);
    event Withdrawal(address indexed to, uint amount);
    event BatchTransfer(address indexed from, address[] recipients, uint[] amounts);

   modifier initializer() {

    require(initialize == false , "Already initialized");
    initialize = true ;
    _;
   }

   
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }


    function init(address _admin ) external initializer {
        admin = _admin ;
    }

   function makeAdmin(address _newAddress) external {
      admin = _newAddress;
   }


   function changeAdmin(address _newAddress)  external onlyAdmin{
        admin = _newAddress;
    }

  
  function deposit(uint256 _amount) external payable onlyAdmin {

  require(_amount <= msg.value, "Deposit amount cannot exceed sent ETH");
  payable(address(this)).transfer(_amount);

  emit Deposit(msg.sender, _amount);
 }



    function withdraw(uint _amount) external onlyAdmin {
        require(address(this).balance >= _amount, "Insufficient balance");
        payable(admin).transfer(_amount);
        emit Withdrawal(admin, _amount);
    }
 
   

    function batchTransfer(address[] calldata recipients, uint[] calldata amounts) external onlyAdmin {
        require(recipients.length == amounts.length, "Recipients and amounts arrays must be of the same length");
        uint recepientsLength = recipients.length;
        
        for (uint i = 0; i < recepientsLength; i++) {
            require(address(this).balance >= amounts[i], "Insufficient balance for batch transfer");
            payable(recipients[i]).transfer(amounts[i]);

        }

        emit BatchTransfer(msg.sender, recipients, amounts);
    }

  
    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }
}
