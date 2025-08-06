"use client";

import { NetworkId } from "@kanalabs/aggregator";
import {
  BridgeOption,
  Chain,
  KanaWidget,
  WidgetConfig,
} from "@kanalabs/kana-widget-v2";

const Widget = () => {
  console.log(NetworkId.Arbitrum)
  const widgetConfig: WidgetConfig = {
    // Required: The unique SDK key provided by the development team. This key is essential for the widget to function properly.
    // If you haven't received a key yet, please contact the development team to obtain one.
    sdkKey: "Your dApp/company SDK key",
    //Optional: The name of your dApp or company using this widget.
    integrator: "Your dApp/company name",

    //Optional: Configures the blockchain chains that will be used as source and target for transactions.
    chains: {
      sourceChain: [Chain.Aptos, Chain.Solana, Chain.Ethereum],
      targetChain: [Chain.Aptos, Chain.Solana, Chain.Ethereum],
    },

    //Optional: Configuration for bridges that are supported by the widget for cross-chain transactions.
    bridges: [BridgeOption.CCTP, BridgeOption.Wormhole], // List of bridge options.

    //Optional: Determines whether a guided tour or walkthrough is available for users of the widget.
    // Set to 'false' to disable the tour.
    tour: false,

    // Optional: Configure custom blockchain network providers if you wish to use your own instead of default settings.
    Provider: {
      aptosProvider: `https://aptos-mainnet.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODEREAL_KEY}/v1`,
      solanaProvider: `https://twilight-powerful-river.solana-mainnet.discover.quiknode.pro/${process.env.NEXT_PUBLIC_SOLANA_QUICKNODE_SWAP}`,
      polygonProvider: `https://polygon-mainnet.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODEREAL_KEY}`,
      binanceProvider: `https://bsc-mainnet.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODEREAL_KEY}`,
      ethereumProvider: `https://eth-mainnet.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODEREAL_KEY}`,
      arbitrumProvider: `https://open-platform.nodereal.io/${process.env.NEXT_PUBLIC_NODEREAL_KEY}/arbitrum-nitro/`,
      avalancheProvider: `https://open-platform.nodereal.io/${process.env.NEXT_PUBLIC_NODEREAL_KEY}/avalanche-c/ext/bc/C/rpc`,
      baseProvider: `https://open-platform.nodereal.io/${process.env.NEXT_PUBLIC_NODEREAL_KEY}/base`,
      zkSyncProvider: `https://open-platform.nodereal.io/${process.env.NEXT_PUBLIC_NODEREAL_KEY}/zksync`,
      suiProvider: "https://sui-mainnet-rpc.nodereal.io",
    },
    //Optional: Styling options for the widget container and elements within it.
    containerStyle: {
      backgroundColor: "#1E1123", // Background color of the widget container.
      primaryColor: "#130E18", // Primary color theme for the widget.
      secondaryColor: "#2c2533", // Secondary color theme for the widget.
      buttonColor: "#00fbd0", // Color for buttons within the widget.
    },
  };

  return <KanaWidget config={widgetConfig} />;
};

export default Widget;
