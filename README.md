verisense veforum vemodel types typescript package

[![NPM version](https://badge.fury.io/js/@verisense-network%2Fvemodel-types.svg)](https://www.npmjs.com/package/@verisense-network/vemodel-types)

```
https://github.com/verisense-network/veforum/blob/main/vemodel/src/lib.rs
```

## How to use

```ts
import { registry, CommunityId } from "@verisense-network/vemodel-types";
import { Result } from "@verisense-network/vemodel-types/codec";

const communityId = new CommunityId(registry, Buffer.from("xxx"));

/**
 * communityId.toU8a()
 * communityId.toHuman()
 * communityId.toHex()
 */
```
