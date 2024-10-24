import {
  KanaWidget,
  WidgetConfig,
  // Chain,
  // AptosDexsFilter,
  // BridgeOption,
} from "@kanalabs/kana-widget-v2";
const SwapPage = () => {
  const NODEREAL_KEY = process.env.REACT_APP_NODEREAL_KEY;
  const SOLANA_QUICKNODE_SWAP = process.env.REACT_APP_SOLANA_QUICKNODE_SWAP;
  const PAYMASTER_KEY = process.env.REACT_APP_PAYMASTER_KEY;
  const PAYMASTER_URL = process.env.REACT_APP_BASE_URL;
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const widgetConfig: WidgetConfig = {
    // Required: The unique SDK key provided by the development team. This key is essential for the widget to function properly.
    // If you haven't received a key yet, please contact the development team to obtain one.
    sdkKey: "Your dApp/company SDK key",

    //Optional: The name of your dApp or company using this widget.
    integrator: "Your dApp/company name",

    //Optional: Configures the blockchain chains that will be used as source and target for transactions.
    // chains: {
    //   sourceChain: [Chain.Aptos, Chain.Solana, Chain.Ethereum],
    //   targetChain: [Chain.Aptos, Chain.Solana, Chain.Ethereum],
    // },

    //Optional: Configuration for decentralized exchanges (DEXs) to be used within the widget,
    // categorized by blockchain.
    // dexs: {
    //   aptos: [AptosDexsFilter.Pontem], // List of DEXs to be used on the Aptos blockchain.
    // },

    //Optional: Configuration for bridges that are supported by the widget for cross-chain transactions.
    // bridges: [BridgeOption.CCTP, BridgeOption.Wormhole], // List of bridge options.

    //Optional: Determines whether a guided tour or walkthrough is available for users of the widget.
    // Set to 'false' to disable the tour.
    tour: false,

    // Optional: Configure custom blockchain network providers if you wish to use your own instead of default settings.
    Provider: {
      aptosProvider: `https://aptos-mainnet.nodereal.io/v1/${NODEREAL_KEY}/v1`,
      solanaProvider: `https://greatest-frequent-owl.solana-mainnet.quiknode.pro/${SOLANA_QUICKNODE_SWAP}`,
      polygonProvider: `https://polygon-mainnet.nodereal.io/v1/${NODEREAL_KEY}`,
      binanceProvider: `https://bsc-mainnet.nodereal.io/v1/${NODEREAL_KEY}`,
      ethereumProvider: `https://eth-mainnet.nodereal.io/v1/${NODEREAL_KEY}`,
      arbitrumProvider: `https://open-platform.nodereal.io/${NODEREAL_KEY}/arbitrum-nitro/`,
      baseProvider: `https://open-platform.nodereal.io/${NODEREAL_KEY}/base`,
      avalancheProvider: `https://open-platform.nodereal.io/${NODEREAL_KEY}/avalanche-c/ext/bc/C/rpc`,
      zkSyncProvider: `https://open-platform.nodereal.io/${NODEREAL_KEY}/zksync`,
      suiProvider: "https://sui-mainnet-rpc.nodereal.io",
    },
    paymasterApikey: PAYMASTER_KEY!,
    paymasterUrl: PAYMASTER_URL!,
    isPaymaster: true,
    googleClientId: GOOGLE_CLIENT_ID,
  };
  return (
    <div className="flex h-full p-4">
      <div className="w-full flex justify-center items-center">
        <KanaWidget config={widgetConfig} />
      </div>
    </div>
  );
};

export default SwapPage;
