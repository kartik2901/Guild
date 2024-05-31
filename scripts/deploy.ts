

import { ShidoTest } from '../typechain-types';
import { ShidoTest__factory } from '../typechain-types';
import { ShidoTestInterface } from '../typechain-types/ShidoTest';

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers, network}  from "hardhat";

function sleep(ms: any){
  return new Promise((resolve) => setTimeout(resolve, ms));
}

  
async function main() {

  const ShidoTest = await ethers.getContractFactory("shidoTest");
  
  
  // console.log("Jetsys : " , Jetsynthesys1155);
  const shidoContract = await ShidoTest.deploy();
 
  console.log("It is working till here");

  await sleep(4000);
  console.log("ContractAddress: ", shidoContract.address);


} 

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
