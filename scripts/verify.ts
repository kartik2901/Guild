const hre = require("hardhat");
// import {
//   expandTo18Decimals,
//   expandTo6Decimals,
// } from "../test/utils/utilities";
import { ShidoTest } from "../typechain-types";

async function main() {
  console.log("after");
// let owner = "0xC46d483FA31Cd67f93B7158569ACCA8678B1AAf5";
// let factory = "0x5B7E8D1b028f830b58fC7Cf059B71FE350D4f850"
// let weth = "0x96F10614c32bD6dCc2a8e5Fe71cAd70057659d8B"
//   // await hre.run("verify:verify", {
  //   address: "0x3e136A9e746481937a6Da058178c9c244C5F2d5f",
  //   constructorArguments: [],
  //   contract: "contracts/USDC.sol:Usdc",
  // });

  // await hre.run("verify:verify", {
  //   address: "0x7B17CF011d42e19265494Fa5feBabd6f3AA383c2",
  //   constructorArguments: [],
  //   contract: "contracts/USDT.sol:Usdt",
  // });

  // await hre.run("verify:verify", {
  //   address: "0xb34857DDE26739724878707c0D677E79B5aB73D4",
  //   constructorArguments: [],
  //   contract: "contracts/WBTC.sol:WrappedBTC",
  // });
  // // Dabbler 0x5FbDB2315678afecb367f032d93F642f64180aa3
  // // mkt address  0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512


  await hre.run("verify:verify", {
    address: "0xaEce958C81d1d7e6F5F17d6B6221b12405eb6C4E",
    constructorArguments: [],
    contract: "contracts/shidoTest.sol:shidoTest",
  });

  console.log("Successfullly verified L ");

//   await hre.run("verify:verify", {
//     address: "0xCE6F90e982e1d33a8a79081940Ecc743D6A6C6E0",
//     constructorArguments: [],
//     contract: "contracts/MarketPlace.sol:MarketPlace",
//   });

//   await hre.run("verify:verify", {
//     address: "0xE37C426A15f1f0879b8af58ec944E235945167d9",//marketplace proxy
//     constructorArguments: [],
//     contract: "contracts/upgradeability/OwnedUpgradeabilityProxy.sol:OwnedUpgradeabilityProxy",
//   });

//   await hre.run("verify:verify", {
//     address: "0x53272e99E1AA649FcffDA65823131106404C9AA9",//NFT proxy
//     constructorArguments: [],
//     contract: "contracts/upgradeability/OwnedUpgradeabilityProxy.sol:OwnedUpgradeabilityProxy",
//   });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


