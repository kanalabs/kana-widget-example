import { KanaWidget, Environment } from "@kanalabs/kana-widget";
const SwapPage = () => {
  const NODEREAL_KEY = process.env.REACT_APP_NODEREAL_KEY;
  const SOLANA_QUICKNODE_SWAP = process.env.REACT_APP_SOLANA_QUICKNODE_SWAP;
  const config = {
    // Specify the SDK API key here. This key is required for integrators to access SDK functionalities.
    apiKeys: {
      sdkApiKey: "YOUR_API_KEY_HERE", // Replace 'YOUR_API_KEY_HERE' with your actual SDK API key.
    },
    // Default: if chain not provided, then all chains are considered
    chain: {
      // Set source network by specifying IDs:
      // Solana - 1, Aptos - 2, Polygon - 3, BSC (Binance Smart Chain) - 4,
      // Sui - 5, Ethereum - 6,
      // zkSync - 9, Avalanche - 10, Arbitrum - 11
      sourceNetworkIds: [6, 2], // Example: Ethereum and Aptos

      // Set target network by specifying IDs:
      // Solana - 1, Aptos - 2, Polygon - 3, BSC (Binance Smart Chain) - 4,
      // Sui - 5, Ethereum - 6,
      // zkSync - 9, Avalanche - 10, Arbitrum - 11
      targetNetworkIds: [6, 2], // Example: Ethereum and Aptos
    },
    // Set the SDK environment. By default, it is set to production.
    SDK: {
      Environment: Environment.production,
    },
    // Default: Used public RPC, or integrator can provide their own RPC service.
    Provider: {
      aptosProvider: `https://aptos-mainnet.nodereal.io/v1/${NODEREAL_KEY}/v1`,
      solanaProvider: `https://twilight-powerful-river.solana-mainnet.discover.quiknode.pro/${SOLANA_QUICKNODE_SWAP}`,
      polygonProvider: `https://polygon-mainnet.nodereal.io/v1/${NODEREAL_KEY}`,
      binanceProvider: `https://bsc-mainnet.nodereal.io/v1/${NODEREAL_KEY}`,
      ethereumProvider: `https://eth-mainnet.nodereal.io/v1/${NODEREAL_KEY}`,
      arbitrumProvider: `https://open-platform.nodereal.io/${NODEREAL_KEY}/arbitrum-nitro/`,
      avalancheProvider: `https://open-platform.nodereal.io/${NODEREAL_KEY}/avalanche-c/ext/bc/C/rpc`,
      baseProvider: `https://open-platform.nodereal.io/${NODEREAL_KEY}/base`,
      zkSyncProvider: `https://open-platform.nodereal.io/${NODEREAL_KEY}/zksync`,
      suiProvider: "https://sui-mainnet-rpc.nodereal.io",
    },
    // Define visual customization for the container. Customize colors to fit the application's theme.
    containerStyle: {
      backgroundColor: "#1E1123",
      primaryColor: "#130E18",
      secondaryColor: "#2c2533",
      buttonColor: "#00fbd0",
    },
  };
  return <KanaWidget config={config} />;
};

export default SwapPage;
