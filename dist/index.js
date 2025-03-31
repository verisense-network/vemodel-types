"use strict";
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

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
module.exports = __toCommonJS(index_exports);

// src/types.ts
var import_types = require("@polkadot/types");
var import_types_codec = require("@polkadot/types-codec");
var registry = new import_types.TypeRegistry();
var H160 = class extends import_types_codec.U8aFixed {
  constructor(registry2, value, bitLength) {
    super(registry2, value, 160);
  }
};
var AccountId = H160;
var EcdsaSignature = class extends import_types_codec.U8aFixed {
  constructor(registry2, value, bitLength) {
    super(registry2, value, 520);
  }
};
var Pubkey = AccountId;
var CommunityId = import_types_codec.u32;
var EventId = import_types_codec.u64;
var ContentId = import_types_codec.u128;
var TokenMetadata = import_types_codec.Struct.with({
  symbol: import_types_codec.Text,
  total_issuance: import_types_codec.u64,
  decimals: import_types_codec.u8,
  contract: AccountId,
  image: import_types_codec.Option.with(import_types_codec.Text)
});
var LlmVendor = import_types_codec.Enum.with({
  OpenAI: import_types_codec.Struct.with({ key: import_types_codec.Text }),
  DeepSeek: import_types_codec.Struct.with({ key: import_types_codec.Text, host: import_types_codec.Text })
});
var CommunityStatus = import_types_codec.Enum.with({
  PendingCreation: import_types_codec.Null,
  WaitingTx: import_types_codec.u64,
  CreateFailed: import_types_codec.Text,
  Active: import_types_codec.Null,
  Frozen: import_types_codec.u64,
  TokenIssued: import_types_codec.Text
});
var Community = import_types_codec.Struct.with({
  id: import_types_codec.Text,
  private: import_types_codec.Bool,
  logo: import_types_codec.Text,
  name: import_types_codec.Text,
  slug: import_types_codec.Text,
  description: import_types_codec.Text,
  token_info: TokenMetadata,
  prompt: import_types_codec.Text,
  creator: AccountId,
  agent_pubkey: AccountId,
  llm_vendor: LlmVendor,
  llm_assistant_id: import_types_codec.Text,
  status: CommunityStatus,
  created_time: import_types_codec.i64
});
var LLmName = /* @__PURE__ */ ((LLmName2) => {
  LLmName2["OpenAI"] = "OpenAI";
  LLmName2["DeepSeek"] = "DeepSeek";
  return LLmName2;
})(LLmName || {});
function createWithArgs(payload, signature = EcdsaSignature) {
  return import_types_codec.Struct.with({
    signature,
    signer: AccountId,
    nonce: import_types_codec.u64,
    payload
  });
}
var TokenMetadataArg = import_types_codec.Struct.with({
  name: import_types_codec.Text,
  symbol: import_types_codec.Text,
  total_issuance: import_types_codec.u64,
  decimals: import_types_codec.u8,
  new_issue: import_types_codec.Bool,
  contract: import_types_codec.Option.with(import_types_codec.Text),
  image: import_types_codec.Option.with(import_types_codec.Text)
});
var CreateCommunityPayload = import_types_codec.Struct.with({
  name: import_types_codec.Text,
  private: import_types_codec.Bool,
  logo: import_types_codec.Text,
  token: TokenMetadataArg,
  slug: import_types_codec.Text,
  description: import_types_codec.Text,
  prompt: import_types_codec.Text,
  llm_name: import_types_codec.Text,
  llm_api_host: import_types_codec.Option.with(import_types_codec.Text),
  llm_key: import_types_codec.Option.with(import_types_codec.Text)
});
var CreateCommunityArg = createWithArgs(CreateCommunityPayload);
var PostThreadPayload = import_types_codec.Struct.with({
  community: import_types_codec.Text,
  title: import_types_codec.Text,
  content: import_types_codec.Vec.with(import_types_codec.u8),
  images: import_types_codec.Vec.with(import_types_codec.Text),
  mention: import_types_codec.Vec.with(AccountId)
});
var PostThreadArg = createWithArgs(PostThreadPayload);
var PostCommentPayload = import_types_codec.Struct.with({
  thread: ContentId,
  content: import_types_codec.Vec.with(import_types_codec.u8),
  images: import_types_codec.Vec.with(import_types_codec.Text),
  mention: import_types_codec.Vec.with(AccountId),
  reply_to: import_types_codec.Option.with(ContentId)
});
var PostCommentArg = createWithArgs(PostCommentPayload);
var ActivateCommunityArg = import_types_codec.Struct.with({
  community: import_types_codec.Text,
  tx: import_types_codec.Text
});
var Account = import_types_codec.Struct.with({
  nonce: import_types_codec.u64,
  address: H160,
  max_invite_block: import_types_codec.u64,
  alias: import_types_codec.Option.with(import_types_codec.Text),
  last_post_at: import_types_codec.i64
});
var AccountData = import_types_codec.Enum.with({
  Pubkey: Account,
  AliasOf: AccountId
});
var SetAliasPayload = import_types_codec.Struct.with({
  alias: import_types_codec.Text
});
var SetAliasArg = createWithArgs(SetAliasPayload);
var RewardPayload = import_types_codec.Struct.with({
  payload: import_types_codec.Vec.with(import_types_codec.u8),
  signature: import_types_codec.Vec.with(import_types_codec.u8),
  agent_contract: AccountId,
  token_symbol: import_types_codec.Text,
  token_contract: AccountId,
  withdrawed: import_types_codec.Bool
});
var InviteUserPayload = import_types_codec.Struct.with({
  community: import_types_codec.Text,
  invitee: AccountId
});
var InviteUserArg = createWithArgs(InviteUserPayload);
var GenerateInviteCodePayload = import_types_codec.Struct.with({
  community: import_types_codec.Text,
  tx: import_types_codec.Text
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.js.map