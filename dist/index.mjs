var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Account: () => Account,
  AccountData: () => AccountData,
  AccountId: () => AccountId,
  ActivateCommunityArg: () => ActivateCommunityArg,
  Community: () => Community,
  CommunityId: () => CommunityId,
  CommunityStatus: () => CommunityStatus,
  ContentId: () => ContentId,
  CreateCommunityArg: () => CreateCommunityArg,
  CreateCommunityPayload: () => CreateCommunityPayload,
  EcdsaSignature: () => EcdsaSignature,
  EventId: () => EventId,
  GenerateInviteCodeArgs: () => GenerateInviteCodeArgs,
  GenerateInviteCodePayload: () => GenerateInviteCodePayload,
  H160: () => H160,
  InviteUserArg: () => InviteUserArg,
  InviteUserPayload: () => InviteUserPayload,
  LLmName: () => LLmName,
  LlmVendor: () => LlmVendor,
  PostCommentArg: () => PostCommentArg,
  PostCommentPayload: () => PostCommentPayload,
  PostThreadArg: () => PostThreadArg,
  PostThreadPayload: () => PostThreadPayload,
  Pubkey: () => Pubkey,
  RewardPayload: () => RewardPayload,
  SetAliasArg: () => SetAliasArg,
  SetAliasPayload: () => SetAliasPayload,
  TokenMetadata: () => TokenMetadata,
  TokenMetadataArg: () => TokenMetadataArg,
  createWithArgs: () => createWithArgs,
  registry: () => registry
});

// src/types.ts
import { TypeRegistry } from "@polkadot/types";
import {
  Bool,
  Enum,
  i64,
  Null,
  Option,
  Struct,
  Text,
  u128,
  u32,
  u64,
  u8,
  U8aFixed,
  Vec
} from "@polkadot/types-codec";
var registry = new TypeRegistry();
var H160 = class extends U8aFixed {
  constructor(registry2, value, bitLength) {
    super(registry2, value, 160);
  }
};
var AccountId = H160;
var EcdsaSignature = class extends U8aFixed {
  constructor(registry2, value, bitLength) {
    super(registry2, value, 520);
  }
};
var Pubkey = AccountId;
var CommunityId = u32;
var EventId = u64;
var ContentId = u128;
var TokenMetadata = Struct.with({
  symbol: Text,
  total_issuance: u64,
  decimals: u8,
  contract: AccountId,
  image: Option.with(Text)
});
var LlmVendor = Enum.with({
  OpenAI: Struct.with({ key: Text }),
  DeepSeek: Struct.with({ key: Text, host: Text })
});
var CommunityStatus = Enum.with({
  PendingCreation: Null,
  WaitingTx: u64,
  CreateFailed: Text,
  Active: Null,
  Frozen: u64,
  TokenIssued: Text
});
var Community = Struct.with({
  id: Text,
  private: Bool,
  logo: Text,
  name: Text,
  slug: Text,
  description: Text,
  token_info: TokenMetadata,
  prompt: Text,
  creator: AccountId,
  agent_pubkey: AccountId,
  llm_vendor: LlmVendor,
  llm_assistant_id: Text,
  status: CommunityStatus,
  created_time: i64
});
var LLmName = /* @__PURE__ */ ((LLmName2) => {
  LLmName2["OpenAI"] = "OpenAI";
  LLmName2["DeepSeek"] = "DeepSeek";
  return LLmName2;
})(LLmName || {});
function createWithArgs(payload, signature = EcdsaSignature) {
  return Struct.with({
    signature,
    signer: AccountId,
    nonce: u64,
    payload
  });
}
var TokenMetadataArg = Struct.with({
  name: Text,
  symbol: Text,
  total_issuance: u64,
  decimals: u8,
  new_issue: Bool,
  contract: Option.with(Text),
  image: Option.with(Text)
});
var CreateCommunityPayload = Struct.with({
  name: Text,
  private: Bool,
  logo: Text,
  token: TokenMetadataArg,
  slug: Text,
  description: Text,
  prompt: Text,
  llm_name: Text,
  llm_api_host: Option.with(Text),
  llm_key: Option.with(Text)
});
var CreateCommunityArg = createWithArgs(CreateCommunityPayload);
var PostThreadPayload = Struct.with({
  community: Text,
  title: Text,
  content: Vec.with(u8),
  images: Vec.with(Text),
  mention: Vec.with(AccountId)
});
var PostThreadArg = createWithArgs(PostThreadPayload);
var PostCommentPayload = Struct.with({
  thread: ContentId,
  content: Vec.with(u8),
  images: Vec.with(Text),
  mention: Vec.with(AccountId),
  reply_to: Option.with(ContentId)
});
var PostCommentArg = createWithArgs(PostCommentPayload);
var ActivateCommunityArg = Struct.with({
  community: Text,
  tx: Text
});
var Account = Struct.with({
  nonce: u64,
  address: H160,
  max_invite_block: u64,
  alias: Option.with(Text),
  last_post_at: i64
});
var AccountData = Enum.with({
  Pubkey: Account,
  AliasOf: AccountId
});
var SetAliasPayload = Struct.with({
  alias: Text
});
var SetAliasArg = createWithArgs(SetAliasPayload);
var RewardPayload = Struct.with({
  payload: Vec.with(u8),
  signature: Vec.with(u8),
  agent_contract: AccountId,
  token_symbol: Text,
  token_contract: AccountId,
  withdrawed: Bool
});
var InviteUserPayload = Struct.with({
  community: Text,
  invitee: AccountId
});
var InviteUserArg = createWithArgs(InviteUserPayload);
var GenerateInviteCodePayload = Struct.with({
  community: Text,
  tx: Text
});
var GenerateInviteCodeArgs = createWithArgs(GenerateInviteCodePayload);
registry.register({
  EcdsaSignature,
  Account,
  AccountId,
  H160,
  Pubkey,
  CommunityId,
  EventId,
  ContentId,
  TokenMetadataArg,
  CreateCommunityArg,
  PostThreadArg,
  ActivateCommunityArg,
  PostCommentArg,
  AccountData,
  SetAliasArg,
  RewardPayload,
  InviteUserPayload,
  InviteUserArg,
  GenerateInviteCodePayload,
  GenerateInviteCodeArgs
});

// src/codec.ts
var codec_exports = {};
__reExport(codec_exports, types_codec_star);
import * as types_codec_star from "@polkadot/types-codec";

// src/index.ts
__reExport(index_exports, codec_exports);
export {
  Account,
  AccountData,
  AccountId,
  ActivateCommunityArg,
  Community,
  CommunityId,
  CommunityStatus,
  ContentId,
  CreateCommunityArg,
  CreateCommunityPayload,
  EcdsaSignature,
  EventId,
  GenerateInviteCodeArgs,
  GenerateInviteCodePayload,
  H160,
  InviteUserArg,
  InviteUserPayload,
  LLmName,
  LlmVendor,
  PostCommentArg,
  PostCommentPayload,
  PostThreadArg,
  PostThreadPayload,
  Pubkey,
  RewardPayload,
  SetAliasArg,
  SetAliasPayload,
  TokenMetadata,
  TokenMetadataArg,
  createWithArgs,
  registry
};
//# sourceMappingURL=index.mjs.map