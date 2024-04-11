# @kanalabs/kana-widget

## Installation

**Kana Widget** is available as a [npm package](https://www.npmjs.com/package/@kanalabs/kana-widget).

**npm:**

```sh
npm install @kanalabs/kana-widget
```

**yarn:**

```sh
yarn add @kanalabs/kana-widget
```

**pnpm:**

```sh
pnpm install @kanalabs/kana-widget
```

## Getting Started with Kana Widget

Here is an example of a basic app using Kana Widget:

```
import { KanaWidget, WidgetConfig } from "@kanalabs/kana-widget";
export const WidgetPage = () => {
  const widgetConfig: WidgetConfig = {
  // Required: The unique SDK key provided by the developer. This key is essential for the widget to function properly.
  // If you haven't received a key yet, please contact the development team to obtain one.
  sdkKey: "Your dApp/company SDK key",

  };
  return (
    <KanaWidget config={widgetConfig} />
  );
};
```

## Configure Widget

This is the example with all the available configurations:

```
import { KanaWidget, AptosDexsFilter, BridgeOption, Chain, WidgetConfig } from "@kanalabs/kana-widget";

const widgetConfig: WidgetConfig = {
  // Required: The unique SDK key provided by the development team. This key is essential for the widget to function properly.
  // If you haven't received a key yet, please contact the development team to obtain one.
  sdkKey: "Your dApp/company SDK key",

  //Optional: The name of your dApp or company using this widget.
  integrator:"Your dApp/company name",

  //Optional: Configures the blockchain chains that will be used as source and target for transactions.
  chains: {
    sourceChain: [Chain.Aptos, Chain.Solana, Chain.Ethereum],
    targetChain: [Chain.Aptos, Chain.Solana, Chain.Ethereum],
  },

  //Optional: Configuration for decentralized exchanges (DEXs) to be used within the widget,
  // categorized by blockchain.
  dexs: {
    aptos: [AptosDexsFilter.Pontem], // List of DEXs to be used on the Aptos blockchain.
  },

  //Optional: Configuration for bridges that are supported by the widget for cross-chain transactions.
  bridges: [BridgeOption.CCTP, BridgeOption.Wormhole], // List of bridge options.

  //Optional: Determines whether a guided tour or walkthrough is available for users of the widget.
  // Set to 'false' to disable the tour.
  tour: false,

  // Optional: Configure custom blockchain network providers if you wish to use your own instead of default settings.
  Provider: {
    aptosProvider: `https://aptos-mainnet.nodereal.io/v1/${NODEREAL_KEY}/v1`,
    solanaProvider: `https://greatest-frequent-owl.solana-mainnet.quiknode.pro/${SOLANA_QUICKNODE_KEY}`,
    polygonProvider: `https://polygon-mainnet.nodereal.io/v1/${NODEREAL_KEY}`,
    binanceProvider: `https://bsc-mainnet.nodereal.io/v1/${NODEREAL_KEY}`,
    ethereumProvider: `https://eth-mainnet.nodereal.io/v1/${NODEREAL_KEY}`,
    arbitrumProvider: `https://open-platform.nodereal.io/${NODEREAL_KEY}/arbitrum-nitro/`,
    avalancheProvider: `https://open-platform.nodereal.io/${NODEREAL_KEY}/avalanche-c/ext/bc/C/rpc`,
    zkSyncProvider: `https://open-platform.nodereal.io/${NODEREAL_KEY}/zksync`,
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

export const WidgetPage = () => {
  return <KanaWidget config={widgetConfig} />;
};
```

## Customize Widget

This example showcases all the available styling configurations:

```
import { KanaWidget, WidgetConfig } from "@kanalabs/kana-widget";

const widgetConfig: WidgetConfig = {
  // Required: The unique SDK key provided by the developer. This key is essential for the widget to function properly.
  // If you haven't received a key yet, please contact the development team to obtain one.
  sdkKey: "Your dApp/company SDK key",

  // Styling options for the widget container and elements within it.
  containerStyle: {
    backgroundColor: "#1E1123", // Background color of the widget container.
    primaryColor: "#130E18", // Primary color theme for the widget.
    secondaryColor: "#2c2533", // Secondary color theme for the widget.
    buttonColor: "#00fbd0", // Color for buttons within the widget.
  },
  };

export const WidgetPage = () => {
  return (
    <KanaWidget config={widgetConfig} />
  );
};
```

## Troubleshooting

If you are facing any issue like

```
BREAKING CHANGE: webpack<5 used to include polyfills for node.js core modules by default.
```

Please add custom webpack settings to **config-overrides.js**. For further details regarding custom webpack settings refer [here](https://www.alchemy.com/blog/how-to-polyfill-node-core-modules-in-webpack-5).

## Documentation

[Kana Widget Documentation](https://docs.kanalabs.io/integrate-kana-widget/kana-widget)
