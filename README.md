verisense veforum vemodel types typescript package

[![NPM version](https://badge.fury.io/js/nodemon.svg)](https://www.npmjs.com/package/@verisense-network/vemodel-types)

```
https://github.com/verisense-network/veforum/blob/main/vemodel/src/lib.rs
```

## Requirements

- @polkadot/types
- @polkadot/types-codec

```sh
npm install @polkadot/types @polkadot/types-codec
// or
pnpm install @polkadot/types @polkadot/types-codec
// or
yarn add @polkadot/types @polkadot/types-codec
```

## How to use

```ts
import { registry, CommunityId } from "@verisense/vemodel-types";

const communityId = new CommunityId(registry, Buffer.from("xxx"));

/**
 * communityId.toU8a()
 * communityId.toHuman()
 * communityId.toHex()
 */
```
