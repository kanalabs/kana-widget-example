# Kana-Widget-Example

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

## Getting Started with Kana Widget

Here is an example of a basic app using Kana Widget:

```
import { KanaWidget } from "@kanalabs/kana-widget";
export const WidgetPage = () => {
  return (
    <KanaWidget/>
  );
};
```

## Styling Config

This is the example with all the available configurations:

```
import { KanaWidget } from "@kanalabs/kana-widget";

const widgetConfig: any = {
    containerStyle: {
      backgroundColor: "#1E1123",
      primaryColor: "#130E18",
      secondaryColor: "#2c2533",
      buttonColor: "#00fbd0",
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
