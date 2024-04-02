'use client';

import { AptosAmmFilter, KanaWidget } from "@kanalabs/kana-widget";

const Widget = () => {

  const widgetConfig: any = {
    apiKeys: {
      sdkApiKey: process.env.NEXT_PUBLIC_SDK_API_KEY,
    },
    chain: {
      // set source chain to Solana and Aptos
      sourceNetworkIds: [1, 2],
      // set source chain to Solana
      targetNetworkIds: [1],
    },
    // set aptos amm filters
    amm: {
      aptos: [AptosAmmFilter.Pontem],
    },
    // set bridge filters
    bridge: {
      // Enabled bridges
      layerzero: true,
      cctp: true,
      wormhole: true,
    },
    //default public RPC
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
  };

  return <KanaWidget config={widgetConfig} />;
};

export default Widget;