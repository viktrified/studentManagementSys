import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = "";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  etherscan: {
    apiKey: "H7MEWF2KCUHAE9PGRMF3VGKEKCFFDM9ZUI",
  },

  networks: {
    sepolia: {
      url: "${ALCHEMY_API_KEY}",
    },
  },
};

export default config;
