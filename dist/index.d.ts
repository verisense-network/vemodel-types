import * as _polkadot_types_codec_base_Enum from '@polkadot/types-codec/base/Enum';
import { TypeRegistry } from '@polkadot/types';
import { U8aFixed, u32, u64, u128, Struct, Text, u8, Option, Enum, Bool, i64, Vec } from '@polkadot/types-codec';
export * from '@polkadot/types-codec';
import { Codec, CodecClass, Registry, AnyU8a, U8aBitLength } from '@polkadot/types-codec/types';

type TypesDef<T = Codec> = Record<string, string | CodecClass<T>>;
declare const registry: TypeRegistry;
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
/**
pub struct H160(pub [u8; 20]);
pub type AccountId = H160;
 */
declare class H160 extends U8aFixed {
    constructor(registry: Registry, value?: AnyU8a, bitLength?: U8aBitLength);
}
/**
 *
    pub struct EcdsaSignature(pub [u8; 65]);
 */
declare class EcdsaSignature extends U8aFixed {
    constructor(registry: Registry, value?: AnyU8a, bitLength?: U8aBitLength);
}
declare const Pubkey: typeof H160;
declare const CommunityId: typeof u32;
declare const EventId: typeof u64;
declare const ContentId: typeof u128;
declare const AccountId: typeof H160;
type AccountId = string;
/**
 *
pub struct TokenMetadata {
    pub symbol: String,
    pub total_issuance: u64,
    pub decimals: u8,
    pub contract: AccountId,
    pub image: Option<String>,
}
 */
declare const TokenMetadata: CodecClass<Struct<{
    symbol: typeof Text;
    total_issuance: typeof u64;
    decimals: typeof u8;
    contract: typeof H160;
    image: CodecClass<Option<Text>, any[]>;
}, {
    symbol: any;
    total_issuance: any;
    decimals: any;
    contract: any;
    image: any;
}, {
    symbol: string;
    total_issuance: string;
    decimals: string;
    contract: string;
    image: string;
}>, any[]>;
type TokenMetadata = {
    name: string;
    symbol: string;
    total_issuance: number;
    decimals: number;
    new_issue: boolean;
    contract: string | null;
    image: string | null;
};
/**
 *
pub enum LlmVendor {
    OpenAI { key: String },
    DeepSeek { key: String, host: String },
}
 */
declare const LlmVendor: _polkadot_types_codec_base_Enum.EnumCodecClass<Enum>;
type LlmVendor = {
    OpenAI: {
        key: string;
    };
    DeepSeek: {
        key: string;
        host: string;
    };
};
/**
 *
pub enum CommunityStatus {
    PendingCreation,
    WaitingTx(u64),
    CreateFailed(String),
    Active,
    Frozen(u64),
    TokenIssued(String),
}
 */
declare const CommunityStatus: _polkadot_types_codec_base_Enum.EnumCodecClass<Enum>;
type CommunityStatus = {
    PendingCreation: null;
    WaitingTx: number;
    CreateFailed: string;
    Active: null;
    Frozen: number;
    TokenIssued: string;
};
type Community = {
    id: string;
    logo: string;
    name: string;
    slug: string;
    description: string;
    token_info: TokenMetadata;
    prompt: string;
    creator: AccountId;
    agent_pubkey: AccountId;
    llm_vendor: any;
    llm_assistant_id: string;
    status: CommunityStatus;
    created_time: number;
};
/**
 *
pub struct Community {
    pub id: String,
    pub private: bool,
    pub logo: String,
    pub name: String,
    pub slug: String,
    pub description: String,
    pub token_info: TokenMetadata,
    pub prompt: String,
    pub creator: AccountId,
    pub agent_pubkey: AccountId,
    pub llm_vendor: LlmVendor,
    pub llm_assistant_id: String,
    pub status: CommunityStatus,
    pub created_time: i64,
}
 */
declare const Community: CodecClass<Struct<{
    id: typeof Text;
    private: typeof Bool;
    logo: typeof Text;
    name: typeof Text;
    slug: typeof Text;
    description: typeof Text;
    token_info: CodecClass<Struct<{
        symbol: typeof Text;
        total_issuance: typeof u64;
        decimals: typeof u8;
        contract: typeof H160;
        image: CodecClass<Option<Text>, any[]>;
    }, {
        symbol: any;
        total_issuance: any;
        decimals: any;
        contract: any;
        image: any;
    }, {
        symbol: string;
        total_issuance: string;
        decimals: string;
        contract: string;
        image: string;
    }>, any[]>;
    prompt: typeof Text;
    creator: typeof H160;
    agent_pubkey: typeof H160;
    llm_vendor: _polkadot_types_codec_base_Enum.EnumCodecClass<Enum>;
    llm_assistant_id: typeof Text;
    status: _polkadot_types_codec_base_Enum.EnumCodecClass<Enum>;
    created_time: typeof i64;
}, {
    id: any;
    private: any;
    logo: any;
    name: any;
    slug: any;
    description: any;
    token_info: any;
    prompt: any;
    creator: any;
    agent_pubkey: any;
    llm_vendor: any;
    llm_assistant_id: any;
    status: any;
    created_time: any;
}, {
    id: string;
    private: string;
    logo: string;
    name: string;
    slug: string;
    description: string;
    token_info: string;
    prompt: string;
    creator: string;
    agent_pubkey: string;
    llm_vendor: string;
    llm_assistant_id: string;
    status: string;
    created_time: string;
}>, any[]>;
declare enum LLmName {
    OpenAI = "OpenAI",
    DeepSeek = "DeepSeek"
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
declare function createWithArgs<T extends CodecClass<Struct<any>>>(payload: T, signature?: typeof EcdsaSignature): CodecClass<Struct<{
    signature: typeof EcdsaSignature;
    signer: typeof H160;
    nonce: typeof u64;
    payload: T;
}, {
    signature: any;
    signer: any;
    nonce: any;
    payload: any;
}, {
    signature: string;
    signer: string;
    nonce: string;
    payload: string;
}>, any[]>;
/**
    pub struct TokenMetadataArg {
        pub name: String,
        pub symbol: String,
        pub total_issuance: u64,
        pub decimals: u8,
        pub new_issue: bool,
        pub contract: Option<String>,
        pub image: Option<String>,
    }
 */
declare const TokenMetadataArg: CodecClass<Struct<{
    name: typeof Text;
    symbol: typeof Text;
    total_issuance: typeof u64;
    decimals: typeof u8;
    new_issue: typeof Bool;
    contract: CodecClass<Option<Text>, any[]>;
    image: CodecClass<Option<Text>, any[]>;
}, {
    name: any;
    symbol: any;
    total_issuance: any;
    decimals: any;
    new_issue: any;
    contract: any;
    image: any;
}, {
    name: string;
    symbol: string;
    total_issuance: string;
    decimals: string;
    new_issue: string;
    contract: string;
    image: string;
}>, any[]>;
/**
    pub struct CreateCommunityArg {
        pub name: String,
        pub private: bool,
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
declare const CreateCommunityPayload: CodecClass<Struct<{
    name: typeof Text;
    private: typeof Bool;
    logo: typeof Text;
    token: CodecClass<Struct<{
        name: typeof Text;
        symbol: typeof Text;
        total_issuance: typeof u64;
        decimals: typeof u8;
        new_issue: typeof Bool;
        contract: CodecClass<Option<Text>, any[]>;
        image: CodecClass<Option<Text>, any[]>;
    }, {
        name: any;
        symbol: any;
        total_issuance: any;
        decimals: any;
        new_issue: any;
        contract: any;
        image: any;
    }, {
        name: string;
        symbol: string;
        total_issuance: string;
        decimals: string;
        new_issue: string;
        contract: string;
        image: string;
    }>, any[]>;
    slug: typeof Text;
    description: typeof Text;
    prompt: typeof Text;
    llm_name: typeof Text;
    llm_api_host: CodecClass<Option<Text>, any[]>;
    llm_key: CodecClass<Option<Text>, any[]>;
}, {
    name: any;
    private: any;
    logo: any;
    token: any;
    slug: any;
    description: any;
    prompt: any;
    llm_name: any;
    llm_api_host: any;
    llm_key: any;
}, {
    name: string;
    private: string;
    logo: string;
    token: string;
    slug: string;
    description: string;
    prompt: string;
    llm_name: string;
    llm_api_host: string;
    llm_key: string;
}>, any[]>;
declare const CreateCommunityArg: CodecClass<Struct<{
    signature: typeof EcdsaSignature;
    signer: typeof H160;
    nonce: typeof u64;
    payload: CodecClass<Struct<{
        name: typeof Text;
        private: typeof Bool;
        logo: typeof Text;
        token: CodecClass<Struct<{
            name: typeof Text;
            symbol: typeof Text;
            total_issuance: typeof u64;
            decimals: typeof u8;
            new_issue: typeof Bool;
            contract: CodecClass<Option<Text>, any[]>;
            image: CodecClass<Option<Text>, any[]>;
        }, {
            name: any;
            symbol: any;
            total_issuance: any;
            decimals: any;
            new_issue: any;
            contract: any;
            image: any;
        }, {
            name: string;
            symbol: string;
            total_issuance: string;
            decimals: string;
            new_issue: string;
            contract: string;
            image: string;
        }>, any[]>;
        slug: typeof Text;
        description: typeof Text;
        prompt: typeof Text;
        llm_name: typeof Text;
        llm_api_host: CodecClass<Option<Text>, any[]>;
        llm_key: CodecClass<Option<Text>, any[]>;
    }, {
        name: any;
        private: any;
        logo: any;
        token: any;
        slug: any;
        description: any;
        prompt: any;
        llm_name: any;
        llm_api_host: any;
        llm_key: any;
    }, {
        name: string;
        private: string;
        logo: string;
        token: string;
        slug: string;
        description: string;
        prompt: string;
        llm_name: string;
        llm_api_host: string;
        llm_key: string;
    }>, any[]>;
}, {
    signature: any;
    signer: any;
    nonce: any;
    payload: any;
}, {
    signature: string;
    signer: string;
    nonce: string;
    payload: string;
}>, any[]>;
/**
    pub struct PostThreadArg {
        pub community: String,
        pub title: String,
        pub content: Vec<u8>,
        pub images: Vec<String>,
        pub mention: Vec<AccountId>,
    }
 */
declare const PostThreadPayload: CodecClass<Struct<{
    community: typeof Text;
    title: typeof Text;
    content: CodecClass<Vec<u8>, any[]>;
    images: CodecClass<Vec<Text>, any[]>;
    mention: CodecClass<Vec<H160>, any[]>;
}, {
    community: any;
    title: any;
    content: any;
    images: any;
    mention: any;
}, {
    community: string;
    title: string;
    content: string;
    images: string;
    mention: string;
}>, any[]>;
declare const PostThreadArg: CodecClass<Struct<{
    signature: typeof EcdsaSignature;
    signer: typeof H160;
    nonce: typeof u64;
    payload: CodecClass<Struct<{
        community: typeof Text;
        title: typeof Text;
        content: CodecClass<Vec<u8>, any[]>;
        images: CodecClass<Vec<Text>, any[]>;
        mention: CodecClass<Vec<H160>, any[]>;
    }, {
        community: any;
        title: any;
        content: any;
        images: any;
        mention: any;
    }, {
        community: string;
        title: string;
        content: string;
        images: string;
        mention: string;
    }>, any[]>;
}, {
    signature: any;
    signer: any;
    nonce: any;
    payload: any;
}, {
    signature: string;
    signer: string;
    nonce: string;
    payload: string;
}>, any[]>;
/**
    pub struct PostCommentArg {
        pub thread: ContentId,
        pub content: Vec<u8>,
        pub images: Vec<String>,
        pub mention: Vec<AccountId>,
        pub reply_to: Option<ContentId>,
    }
 */
declare const PostCommentPayload: CodecClass<Struct<{
    thread: typeof u128;
    content: CodecClass<Vec<u8>, any[]>;
    images: CodecClass<Vec<Text>, any[]>;
    mention: CodecClass<Vec<H160>, any[]>;
    reply_to: CodecClass<Option<u128>, any[]>;
}, {
    thread: any;
    content: any;
    images: any;
    mention: any;
    reply_to: any;
}, {
    thread: string;
    content: string;
    images: string;
    mention: string;
    reply_to: string;
}>, any[]>;
declare const PostCommentArg: CodecClass<Struct<{
    signature: typeof EcdsaSignature;
    signer: typeof H160;
    nonce: typeof u64;
    payload: CodecClass<Struct<{
        thread: typeof u128;
        content: CodecClass<Vec<u8>, any[]>;
        images: CodecClass<Vec<Text>, any[]>;
        mention: CodecClass<Vec<H160>, any[]>;
        reply_to: CodecClass<Option<u128>, any[]>;
    }, {
        thread: any;
        content: any;
        images: any;
        mention: any;
        reply_to: any;
    }, {
        thread: string;
        content: string;
        images: string;
        mention: string;
        reply_to: string;
    }>, any[]>;
}, {
    signature: any;
    signer: any;
    nonce: any;
    payload: any;
}, {
    signature: string;
    signer: string;
    nonce: string;
    payload: string;
}>, any[]>;
/**
 *
    pub struct ActivateCommunityArg {
        pub community: String,
        pub tx: String,
    }
 */
declare const ActivateCommunityArg: CodecClass<Struct<{
    community: typeof Text;
    tx: typeof Text;
}, {
    community: any;
    tx: any;
}, {
    community: string;
    tx: string;
}>, any[]>;
/**
pub struct Account {
    pub nonce: u64,
    pub address: H160,
    pub max_invite_block: u64,
    pub alias: Option<String>,
    pub last_post_at: i64,
}
 */
declare const Account: CodecClass<Struct<{
    nonce: typeof u64;
    address: typeof H160;
    max_invite_block: typeof u64;
    alias: CodecClass<Option<Text>, any[]>;
    last_post_at: typeof i64;
}, {
    nonce: any;
    address: any;
    max_invite_block: any;
    alias: any;
    last_post_at: any;
}, {
    nonce: string;
    address: string;
    max_invite_block: string;
    alias: string;
    last_post_at: string;
}>, any[]>;
/**
pub enum AccountData {
    Pubkey(Account),
    AliasOf(AccountId),
}
 */
declare const AccountData: _polkadot_types_codec_base_Enum.EnumCodecClass<Enum>;
/**
    pub struct SetAliasArg {
        pub alias: String,
    }
 */
declare const SetAliasPayload: CodecClass<Struct<{
    alias: typeof Text;
}, {
    alias: any;
}, {
    alias: string;
}>, any[]>;
declare const SetAliasArg: CodecClass<Struct<{
    signature: typeof EcdsaSignature;
    signer: typeof H160;
    nonce: typeof u64;
    payload: CodecClass<Struct<{
        alias: typeof Text;
    }, {
        alias: any;
    }, {
        alias: string;
    }>, any[]>;
}, {
    signature: any;
    signer: any;
    nonce: any;
    payload: any;
}, {
    signature: string;
    signer: string;
    nonce: string;
    payload: string;
}>, any[]>;
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
declare const RewardPayload: CodecClass<Struct<{
    payload: CodecClass<Vec<u8>, any[]>;
    signature: CodecClass<Vec<u8>, any[]>;
    agent_contract: typeof H160;
    token_symbol: typeof Text;
    token_contract: typeof H160;
    withdrawed: typeof Bool;
}, {
    payload: any;
    signature: any;
    agent_contract: any;
    token_symbol: any;
    token_contract: any;
    withdrawed: any;
}, {
    payload: string;
    signature: string;
    agent_contract: string;
    token_symbol: string;
    token_contract: string;
    withdrawed: string;
}>, any[]>;
/**
 *
    pub struct InviteUserArgs {
        pub community: String,
        pub invitee: AccountId
    }
 */
declare const InviteUserPayload: CodecClass<Struct<{
    community: typeof Text;
    invitee: typeof H160;
}, {
    community: any;
    invitee: any;
}, {
    community: string;
    invitee: string;
}>, any[]>;
declare const InviteUserArg: CodecClass<Struct<{
    signature: typeof EcdsaSignature;
    signer: typeof H160;
    nonce: typeof u64;
    payload: CodecClass<Struct<{
        community: typeof Text;
        invitee: typeof H160;
    }, {
        community: any;
        invitee: any;
    }, {
        community: string;
        invitee: string;
    }>, any[]>;
}, {
    signature: any;
    signer: any;
    nonce: any;
    payload: any;
}, {
    signature: string;
    signer: string;
    nonce: string;
    payload: string;
}>, any[]>;
/**
 *
    pub struct GenerateInviteCodeArgs {
        pub community: String,
        pub tx: String,
    }
 */
declare const GenerateInviteCodePayload: CodecClass<Struct<{
    community: typeof Text;
    tx: typeof Text;
}, {
    community: any;
    tx: any;
}, {
    community: string;
    tx: string;
}>, any[]>;
declare const GenerateInviteCodeArgs: CodecClass<Struct<{
    signature: typeof EcdsaSignature;
    signer: typeof H160;
    nonce: typeof u64;
    payload: CodecClass<Struct<{
        community: typeof Text;
        tx: typeof Text;
    }, {
        community: any;
        tx: any;
    }, {
        community: string;
        tx: string;
    }>, any[]>;
}, {
    signature: any;
    signer: any;
    nonce: any;
    payload: any;
}, {
    signature: string;
    signer: string;
    nonce: string;
    payload: string;
}>, any[]>;

export { Account, AccountData, AccountId, ActivateCommunityArg, Community, CommunityId, CommunityStatus, ContentId, CreateCommunityArg, CreateCommunityPayload, EcdsaSignature, EventId, GenerateInviteCodeArgs, GenerateInviteCodePayload, H160, InviteUserArg, InviteUserPayload, LLmName, LlmVendor, PostCommentArg, PostCommentPayload, PostThreadArg, PostThreadPayload, Pubkey, RewardPayload, SetAliasArg, SetAliasPayload, TokenMetadata, TokenMetadataArg, type TypesDef, createWithArgs, registry };
