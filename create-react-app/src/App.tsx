import Widget from "@kanalabs/kana-widget";
const SwapPage = () => {
  const NODEREAL_KEY = process.env.REACT_APP_NODEREAL_KEY;
  const SDK_API_KEY = process.env.REACT_APP_SDK_API_KEY;
  const SOLANA_QUICKNODE_SWAP = process.env.REACT_APP_SOLANA_QUICKNODE_SWAP;
  const config = {
    //sdk api key for integrator
    apiKeys: {
      sdkApiKey: SDK_API_KEY,
    },
    chain: {
      // set source chain to Solana and Aptos
      sourceNetworkIds: [1, 2],
      // set source chain to Solana
      targetNetworkIds: [1],
    },
    //default production
    SDK: {
      Environment: "test",
    },
    //default public rpc or integrator can provide ther rpc service
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
    // visual customization
    containerStyle: {
      backgroundColor: "#1E1123",
      primaryColor: "#130E18",
      secondaryColor: "#2c2533",
      buttonColor: "#00fbd0",
    },
  };
  return <Widget config={config} />;
};

export default SwapPage;
