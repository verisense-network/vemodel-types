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
  Vec,
} from "@polkadot/types-codec";
import {
  AnyU8a,
  Codec,
  CodecClass,
  Registry,
  U8aBitLength,
} from "@polkadot/types-codec/types";

export type TypesDef<T = Codec> = Record<string, string | CodecClass<T>>;

export const registry = new TypeRegistry();

/**
 * rust types from verisense vemodel
 * https://github.com/verisense-network/veforum/blob/main/vemodel/src/lib.rs
 */

/**
 * 
pub struct AccountId(pub [u8; 32]);

pub type Pubkey = AccountId;

pub struct Signature(pub [u8; 64]);

pub type CommunityId = u32;
pub type EventId = u64;
pub type ContentId = u128;
 */

// export const AccountId = GenericAccountId32;

/**
pub struct H160(pub [u8; 20]);
pub type AccountId = H160;
 */

export class H160 extends U8aFixed {
  constructor(registry: Registry, value?: AnyU8a, bitLength?: U8aBitLength) {
    super(registry, value, 160); // 160 位 = 20 字节
  }
}

registry.register({
  H160,
});

export const AccountId = H160;

registry.register({
  AccountId,
});

// export const Signature = U8aFixed.with(512);
/**
 * 
    pub struct EcdsaSignature(pub [u8; 65]);
 */

export class EcdsaSignature extends U8aFixed {
  constructor(registry: Registry, value?: AnyU8a, bitLength?: U8aBitLength) {
    super(registry, value, 520); // 520 位 = 65 字节
  }
}

registry.register({
  EcdsaSignature,
});

export const Pubkey = AccountId;

registry.register({
  Pubkey,
});

export const CommunityId = u32;
export const EventId = u64;
export const ContentId = u128;

registry.register({
  CommunityId,
  EventId,
  ContentId,
});

/**
 * 
pub struct TokenMetadata {
    pub name: String,
    pub symbol: String,
    pub total_issuance: u128,
    pub decimals: u8,
    pub new_issue: bool,
    pub contract: AccountId,
    pub image: Option<String>,
}
 */
export const TokenMetadata = Struct.with({
  name: Text,
  symbol: Text,
  total_issuance: u128,
  decimals: u8,
  new_issue: Bool,
  contract: AccountId,
  image: Option.with(Text),
});

/**
 * 
pub enum LlmVendor {
    OpenAI { key: String },
    DeepSeek { key: String, host: String },
}
 */
export const LlmVendor = Enum.with({
  OpenAI: Struct.with({ key: Text }),
  DeepSeek: Struct.with({ key: Text, host: Text }),
});

/**
 * 
pub enum CommunityStatus {
    PendingCreation,
    WaitingTx(u128),
    CreateFailed(String),
    Active,
    Frozen(u64),
    TokenIssued(String),
}
 */
export const CommunityStatus = Enum.with({
  PendingCreation: Null,
  WaitingTx: u128,
  CreateFailed: Text,
  Active: Null,
  Frozen: u64,
  TokenIssued: Text,
});

export type AccountId = string;

export type TokenMetadata = {
  name: string;
  symbol: string;
  total_issuance: number;
  decimals: number;
  new_issue: boolean;
  contract: string | null;
  image: string | null;
};

export type LlmVendor = {
  OpenAI: {
    key: string;
  };
  DeepSeek: {
    key: string;
    host: string;
  };
};

export type CommunityStatus = {
  PendingCreation: null;
  WaitingTx: number;
  CreateFailed: string;
  Active: null;
  Frozen: number;
  TokenIssued: string;
};

export type CommunityMode = {
  Public: null;
  InviteOnly: number;
  PayToJoin: number;
};

export type Community = {
  id: string;
  mode: CommunityMode;
  logo: string;
  name: string;
  slug: string;
  description: string;
  token_info: TokenMetadata;
  agent_contract: string | null;
  prompt: string;
  platform_bnb_benefit: number;
  creator_bnb_benefit: number;
  creator: AccountId;
  agent_pubkey: AccountId;
  // llm_vendor: LlmVendor;
  llm_vendor: any;
  llm_assistant_id: string;
  status: CommunityStatus;
  created_time: number;
};

/**
 * 
pub enum CommunityMode {
    Public,
    InviteOnly,
    PayToJoin(u128),
}
 */
export const CommunityMode = Enum.with({
  Public: Null,
  InviteOnly: Null,
  PayToJoin: u128,
});

/**
 * 
pub struct Community {
    pub id: String,
    pub mode: CommunityMode,
    pub logo: String,
    pub name: String,
    pub slug: String,
    pub description: String,
    pub token_info: TokenMetadata,
    pub agent_contract: Option<AccountId>,
    pub prompt: String,
    pub platform_bnb_benefit: u64,
    pub creator_bnb_benefit: u64,
    pub creator: AccountId,
    pub agent_pubkey: AccountId,
    pub llm_vendor: LlmVendor,
    pub llm_assistant_id: String,
    pub status: CommunityStatus,
    pub created_time: i64,
}
 */
export const Community = Struct.with({
  id: Text,
  mode: CommunityMode,
  logo: Text,
  name: Text,
  slug: Text,
  description: Text,
  token_info: TokenMetadata,
  agent_contract: Option.with(AccountId),
  prompt: Text,
  platform_bnb_benefit: u64,
  creator_bnb_benefit: u64,
  creator: AccountId,
  agent_pubkey: AccountId,
  llm_vendor: LlmVendor,
  llm_assistant_id: Text,
  status: CommunityStatus,
  created_time: i64,
});

export enum LLmName {
  OpenAI = "OpenAI",
  DeepSeek = "DeepSeek",
}
/**
 * 
    type SignedArgs<T> = Args<T, EcdsaSignature>;
  
    pub struct Args<T, S> {
        pub signature: S,
        pub signer: AccountId,
        pub nonce: u64,
        pub payload: T,
    }
 */
export function createWithArgs<T extends CodecClass<Struct<any>>>(
  payload: T,
  signature = EcdsaSignature
) {
  return Struct.with({
    signature,
    signer: AccountId,
    nonce: u64,
    payload,
  });
}

/**
    pub struct TokenMetadataArg {
        pub name: String,
        pub symbol: String,
        pub total_issuance: u128,
        pub decimals: u8,
        pub new_issue: bool,
        pub contract: Option<String>,
        pub image: Option<String>,
    }
 */
export const TokenMetadataArg = Struct.with({
  name: Text,
  symbol: Text,
  total_issuance: u128,
  decimals: u8,
  new_issue: Bool,
  contract: Option.with(Text),
  image: Option.with(Text),
});

/**
    pub struct CreateCommunityArg {
        pub name: String,
        pub mode: CommunityMode,
        pub logo: String,
        pub token: TokenMetadataArg,
        pub slug: String,
        pub description: String,
        pub prompt: String,
        pub llm_name: String,
        pub llm_api_host: Option<String>,
        pub llm_key: Option<String>,
    }
 */
export const CreateCommunityPayload = Struct.with({
  name: Text,
  mode: CommunityMode,
  logo: Text,
  token: TokenMetadataArg,
  slug: Text,
  description: Text,
  prompt: Text,
  llm_name: Text,
  llm_api_host: Option.with(Text),
  llm_key: Option.with(Text),
});

export const CreateCommunityArg = createWithArgs(CreateCommunityPayload);

/**
    pub struct PostThreadArg {
        pub community: String,
        pub title: String,
        pub content: Vec<u8>,
        pub images: Vec<String>,
        pub mention: Vec<AccountId>,
    }
 */
export const PostThreadPayload = Struct.with({
  community: Text,
  title: Text,
  content: Vec.with(u8),
  images: Vec.with(Text),
  mention: Vec.with(AccountId),
});

export const PostThreadArg = createWithArgs(PostThreadPayload);

/**
    pub struct PostCommentArg {
        pub thread: ContentId,
        pub content: Vec<u8>,
        pub images: Vec<String>,
        pub mention: Vec<AccountId>,
        pub reply_to: Option<ContentId>,
    }
 */
export const PostCommentPayload = Struct.with({
  thread: ContentId,
  content: Vec.with(u8),
  images: Vec.with(Text),
  mention: Vec.with(AccountId),
  reply_to: Option.with(ContentId),
});

export const PostCommentArg = createWithArgs(PostCommentPayload);

/**
 * 
    pub struct ActivateCommunityArg {
        pub community: String,
        pub tx: String,
    }
 */
export const ActivateCommunityArg = Struct.with({
  community: Text,
  tx: Text,
});

/**
pub struct Account {
    pub nonce: u64,
    pub address: H160,
    pub last_transfer_block: u64,
    pub alias: Option<String>,
    pub last_post_at: u64,
}
 */
export const Account = Struct.with({
  nonce: u64,
  address: H160,
  last_transfer_block: u64,
  alias: Option.with(Text),
  last_post_at: u64,
});

/**
pub enum AccountData {
    Pubkey(Account),
    AliasOf(AccountId),
}
 */

export const AccountData = Enum.with({
  Pubkey: Account,
  AliasOf: AccountId,
});

/**
    pub struct SetAliasArg {
        pub alias: String,
    }
 */
export const SetAliasPayload = Struct.with({
  alias: Text,
});

export const SetAliasArg = createWithArgs(SetAliasPayload);

/**
 * 
pub struct RewardPayload {
    pub payload: Vec<u8>,
    pub signature: Vec<u8>,
    pub agent_contract: AccountId,
    pub token_symbol: String,
    pub token_contract: AccountId,
    pub withdrawed: bool,
}
 */
export const RewardPayload = Struct.with({
  payload: Vec.with(u8),
  signature: Vec.with(u8),
  agent_contract: AccountId,
  token_symbol: Text,
  token_contract: AccountId,
  withdrawed: Bool,
});

/**
 * 
    pub struct InviteUserArgs {
        pub community: String,
        pub invitee: AccountId
    }
 */
export const InviteUserPayload = Struct.with({
  community: Text,
  invitee: AccountId,
});

export const InviteUserArg = createWithArgs(InviteUserPayload);

/**
 * 
    pub struct GenerateInviteTicketArgs {
        pub community_id: CommunityId,
        pub tx: String,
    }
 */
export const GenerateInviteTicketArg = Struct.with({
  community_id: CommunityId,
  tx: Text,
});

/**
 *     pub struct SetModeArg {
        pub community: String,
        pub mode: CommunityMode,
    }
 */
export const SetModePayload = Struct.with({
  community: Text,
  mode: CommunityMode,
});

export const SetModeArg = createWithArgs(SetModePayload);

/**
 *     pub struct PaysFeeArg {
        pub community: String,
        pub tx: String,
    }
 */
export const PaysFeeArg = Struct.with({
  community: Text,
  tx: Text,
});

registry.register({
  EcdsaSignature,
  Account,
  H160,
  Pubkey,
  TokenMetadataArg,
  CreateCommunityArg,
  PostThreadArg,
  ActivateCommunityArg,
  PostCommentArg,
  TokenMetadata,
  Community,
  CommunityMode,
  AccountData,
  SetAliasArg,
  RewardPayload,
  InviteUserPayload,
  InviteUserArg,
  GenerateInviteTicketArg,
  SetModePayload,
  SetModeArg,
  PaysFeeArg,
});
