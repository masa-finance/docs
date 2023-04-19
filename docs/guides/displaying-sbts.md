---
title: Displaying SBTs
---

# Displaying SBTs

Displaying SBTs in a gallery like view can be done with masa-react quite easily. You can use the [Masa React Sample Application](https://github.com/masa-finance/masa-react-example) as a boilerplate.

## Install Masa SDK

#### Install via yarn

```bash
yarn add @masa-finance/masa-react --save
```

#### Install via npm

```bash
npm i @masa-finance/masa-react --save
```

## Displaying Masa Green details on a webpage

```typescript jsx
import {
  useMasa
} from "@masa-finance/masa-react";

export const Green = () => {
  const {
    masa,
    greens,
    isGreensLoading,
    reloadGreens
  } = useMasa();

  return (
    <div>
      <div>
        <button
          onClick={reloadGreens}>
          Reload Greens
        </button>
      </div>
      {!isGreensLoading && greens ? (
        greens.length > 0 ? (
          greens.map((green) => (
            <div
              key={green.tokenId.toString()}>
              <div>TokenId: {green.tokenId.toString()}</div>
              <div>TokenId: {green.tokenUri}</div>
            </div>
          ))
        ) : (
          <>no
            greens
            on {masa.config.networkName}</>
        )
      ) : (
        <div>
          Loading ...
        </div>
      )}
    </div>
  );
};

```