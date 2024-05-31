import { ShidoTest } from './typechain-types/ShidoTest';
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-contract-sizer";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  networks: {
  
      

    sepolia: {
      url: "https://rpc-testnet-nodes.shidoscan.com" || "",
      accounts:["0a7de18d096489ed30c1354c5e5cd93ef930ee2e711446e7037d19ac0edd7222"],
       
    },


    // Shido: {
    //   url: "https://rpc-testnet-nodes.shidoscan.com" || "",
    //   accounts:["0a7de18d096489ed30c1354c5e5cd93ef930ee2e711446e7037d19ac0edd7222"],
       
    // },

    Shido: {
      url: "https://rpc-testnet-nodes.shidoscan.com", // Replace with your network's RPC URL
      chainId: 9007, // Replace with your network's chain ID
      accounts: ["0a7de18d096489ed30c1354c5e5cd93ef930ee2e711446e7037d19ac0edd7222"],  // Optional: List of private keys for deployment
    }


    
  },


  etherscan: {
    apiKey: {
      Shido : "W27E43RUHJN8M2J7WH3DU25XR86K8FDN9S"
    },
    customChains: [
      {
        network: "Shido",
        chainId: 9007,
        urls: {
          apiURL: "https://rpc-testnet-nodes.shidoscan.com",
          browserURL: "https://shidoscan.com"
        }
      }
    ]
  }
  ,
  
  //   etherscan: {
  //     apiKey: {
  //       sepolia : "W27E43RUHJN8M2J7WH3DU25XR86K8FDN9S"
  //     },
  // customChains: [
  //     {
  //       network: "Shido", // Chain ID of your custom network
  //       apiUrl: "https://your-custom-network-rpc-url.com", // RPC URL
  //       blockExplorerUrl: "https://your-custom-block-explorer.com" // Optional block explorer URL
  //     }
  //   ]
  // },


  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};


export default config;