[yin-yang-ts](../README.md) / [Exports](../modules.md) / [client/DiscordClient](../modules/client_discordclient.md) / default

# Class: default

[client/DiscordClient](../modules/client_discordclient.md).default

## Hierarchy

* *Client*

  ↳ **default**

## Table of contents

### Constructors

- [constructor](client_discordclient.default.md#constructor)

### Properties

- [bot](client_discordclient.default.md#bot)
- [channels](client_discordclient.default.md#channels)
- [emojis](client_discordclient.default.md#emojis)
- [guilds](client_discordclient.default.md#guilds)
- [options](client_discordclient.default.md#options)
- [readyAt](client_discordclient.default.md#readyat)
- [readyTimestamp](client_discordclient.default.md#readytimestamp)
- [shard](client_discordclient.default.md#shard)
- [token](client_discordclient.default.md#token)
- [uptime](client_discordclient.default.md#uptime)
- [user](client_discordclient.default.md#user)
- [users](client_discordclient.default.md#users)
- [voice](client_discordclient.default.md#voice)
- [ws](client_discordclient.default.md#ws)
- [defaultMaxListeners](client_discordclient.default.md#defaultmaxlisteners)
- [errorMonitor](client_discordclient.default.md#errormonitor)

### Methods

- [addListener](client_discordclient.default.md#addlistener)
- [clearImmediate](client_discordclient.default.md#clearimmediate)
- [clearInterval](client_discordclient.default.md#clearinterval)
- [clearTimeout](client_discordclient.default.md#cleartimeout)
- [destroy](client_discordclient.default.md#destroy)
- [emit](client_discordclient.default.md#emit)
- [eventNames](client_discordclient.default.md#eventnames)
- [fetchApplication](client_discordclient.default.md#fetchapplication)
- [fetchGuildPreview](client_discordclient.default.md#fetchguildpreview)
- [fetchInvite](client_discordclient.default.md#fetchinvite)
- [fetchVoiceRegions](client_discordclient.default.md#fetchvoiceregions)
- [fetchWebhook](client_discordclient.default.md#fetchwebhook)
- [generateInvite](client_discordclient.default.md#generateinvite)
- [getGuild](client_discordclient.default.md#getguild)
- [getMaxListeners](client_discordclient.default.md#getmaxlisteners)
- [listenerCount](client_discordclient.default.md#listenercount)
- [listeners](client_discordclient.default.md#listeners)
- [login](client_discordclient.default.md#login)
- [off](client_discordclient.default.md#off)
- [on](client_discordclient.default.md#on)
- [once](client_discordclient.default.md#once)
- [prependListener](client_discordclient.default.md#prependlistener)
- [prependOnceListener](client_discordclient.default.md#prependoncelistener)
- [rawListeners](client_discordclient.default.md#rawlisteners)
- [removeAllListeners](client_discordclient.default.md#removealllisteners)
- [removeListener](client_discordclient.default.md#removelistener)
- [setImmediate](client_discordclient.default.md#setimmediate)
- [setInterval](client_discordclient.default.md#setinterval)
- [setMaxListeners](client_discordclient.default.md#setmaxlisteners)
- [setTimeout](client_discordclient.default.md#settimeout)
- [sweepMessages](client_discordclient.default.md#sweepmessages)
- [toJSON](client_discordclient.default.md#tojson)
- [listenerCount](client_discordclient.default.md#listenercount)

## Constructors

### constructor

\+ **new default**(`options`: ClientOptions, `bot`: [*default*](client_botclient.default.md)): [*default*](client_discordclient.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | ClientOptions |
`bot` | [*default*](client_botclient.default.md) |

**Returns:** [*default*](client_discordclient.default.md)

Defined in: [src/client/DiscordClient.ts:15](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/client/DiscordClient.ts#L15)

## Properties

### bot

• **bot**: [*default*](client_botclient.default.md)

Defined in: [src/client/DiscordClient.ts:7](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/client/DiscordClient.ts#L7)

___

### channels

• **channels**: *ChannelManager*

Defined in: node_modules/discord.js/typings/index.d.ts:201

___

### emojis

• `Readonly` **emojis**: *GuildEmojiManager*

Defined in: node_modules/discord.js/typings/index.d.ts:202

___

### guilds

• **guilds**: *GuildManager*

Defined in: node_modules/discord.js/typings/index.d.ts:203

___

### options

• **options**: ClientOptions

Defined in: node_modules/discord.js/typings/index.d.ts:130

___

### readyAt

• **readyAt**: *null* \| Date

Defined in: node_modules/discord.js/typings/index.d.ts:204

___

### readyTimestamp

• `Readonly` **readyTimestamp**: *null* \| *number*

Defined in: node_modules/discord.js/typings/index.d.ts:205

___

### shard

• **shard**: *null* \| *ShardClientUtil*

Defined in: node_modules/discord.js/typings/index.d.ts:206

___

### token

• **token**: *null* \| *string*

Defined in: node_modules/discord.js/typings/index.d.ts:207

___

### uptime

• `Readonly` **uptime**: *null* \| *number*

Defined in: node_modules/discord.js/typings/index.d.ts:208

___

### user

• **user**: *null* \| *ClientUser*

Defined in: node_modules/discord.js/typings/index.d.ts:209

___

### users

• **users**: *UserManager*

Defined in: node_modules/discord.js/typings/index.d.ts:210

___

### voice

• **voice**: *null* \| *ClientVoiceManager*

Defined in: node_modules/discord.js/typings/index.d.ts:211

___

### ws

• **ws**: *WebSocketManager*

Defined in: node_modules/discord.js/typings/index.d.ts:212

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Defined in: node_modules/@types/node/events.d.ts:45

___

### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](client_discordclient.default.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:55

## Methods

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*default*](client_discordclient.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*default*](client_discordclient.default.md)

Defined in: node_modules/@types/node/events.d.ts:62

___

### clearImmediate

▸ **clearImmediate**(`timeout`: *Immediate*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`timeout` | *Immediate* |

**Returns:** *void*

Defined in: node_modules/discord.js/typings/index.d.ts:133

___

### clearInterval

▸ **clearInterval**(`interval`: *Timeout*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`interval` | *Timeout* |

**Returns:** *void*

Defined in: node_modules/discord.js/typings/index.d.ts:131

___

### clearTimeout

▸ **clearTimeout**(`timeout`: *Timeout*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`timeout` | *Timeout* |

**Returns:** *void*

Defined in: node_modules/discord.js/typings/index.d.ts:132

___

### destroy

▸ **destroy**(): *void*

**Returns:** *void*

Defined in: node_modules/discord.js/typings/index.d.ts:213

___

### emit

▸ **emit**<K\>(`event`: K, ...`args`: ClientEvents[K]): *boolean*

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | K |
`...args` | ClientEvents[K] |

**Returns:** *boolean*

Defined in: node_modules/discord.js/typings/index.d.ts:236

▸ **emit**<S\>(`event`: *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\>, ...`args`: *any*[]): *boolean*

#### Type parameters:

Name | Type |
:------ | :------ |
`S` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\> |
`...args` | *any*[] |

**Returns:** *boolean*

Defined in: node_modules/discord.js/typings/index.d.ts:237

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Defined in: node_modules/@types/node/events.d.ts:77

___

### fetchApplication

▸ **fetchApplication**(): *Promise*<ClientApplication\>

**Returns:** *Promise*<ClientApplication\>

Defined in: node_modules/discord.js/typings/index.d.ts:214

___

### fetchGuildPreview

▸ **fetchGuildPreview**(`guild`: GuildResolvable): *Promise*<GuildPreview\>

#### Parameters:

Name | Type |
:------ | :------ |
`guild` | GuildResolvable |

**Returns:** *Promise*<GuildPreview\>

Defined in: node_modules/discord.js/typings/index.d.ts:215

___

### fetchInvite

▸ **fetchInvite**(`invite`: *string*): *Promise*<Invite\>

#### Parameters:

Name | Type |
:------ | :------ |
`invite` | *string* |

**Returns:** *Promise*<Invite\>

Defined in: node_modules/discord.js/typings/index.d.ts:216

___

### fetchVoiceRegions

▸ **fetchVoiceRegions**(): *Promise*<Collection<string, VoiceRegion\>\>

**Returns:** *Promise*<Collection<string, VoiceRegion\>\>

Defined in: node_modules/discord.js/typings/index.d.ts:217

___

### fetchWebhook

▸ **fetchWebhook**(`id`: *string*, `token?`: *string*): *Promise*<Webhook\>

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`token?` | *string* |

**Returns:** *Promise*<Webhook\>

Defined in: node_modules/discord.js/typings/index.d.ts:218

___

### generateInvite

▸ **generateInvite**(`options?`: *number* \| InviteGenerationOptions \| *CREATE_INSTANT_INVITE* \| *KICK_MEMBERS* \| *BAN_MEMBERS* \| *ADMINISTRATOR* \| *MANAGE_CHANNELS* \| *MANAGE_GUILD* \| *ADD_REACTIONS* \| *VIEW_AUDIT_LOG* \| *PRIORITY_SPEAKER* \| *STREAM* \| *VIEW_CHANNEL* \| *SEND_MESSAGES* \| *SEND_TTS_MESSAGES* \| *MANAGE_MESSAGES* \| *EMBED_LINKS* \| *ATTACH_FILES* \| *READ_MESSAGE_HISTORY* \| *MENTION_EVERYONE* \| *USE_EXTERNAL_EMOJIS* \| *VIEW_GUILD_INSIGHTS* \| *CONNECT* \| *SPEAK* \| *MUTE_MEMBERS* \| *DEAFEN_MEMBERS* \| *MOVE_MEMBERS* \| *USE_VAD* \| *CHANGE_NICKNAME* \| *MANAGE_NICKNAMES* \| *MANAGE_ROLES* \| *MANAGE_WEBHOOKS* \| *MANAGE_EMOJIS* \| *Readonly*<BitField<PermissionString\>\> \| *RecursiveReadonlyArray*<number \| *CREATE_INSTANT_INVITE* \| *KICK_MEMBERS* \| *BAN_MEMBERS* \| *ADMINISTRATOR* \| *MANAGE_CHANNELS* \| *MANAGE_GUILD* \| *ADD_REACTIONS* \| *VIEW_AUDIT_LOG* \| *PRIORITY_SPEAKER* \| *STREAM* \| *VIEW_CHANNEL* \| *SEND_MESSAGES* \| *SEND_TTS_MESSAGES* \| *MANAGE_MESSAGES* \| *EMBED_LINKS* \| *ATTACH_FILES* \| *READ_MESSAGE_HISTORY* \| *MENTION_EVERYONE* \| *USE_EXTERNAL_EMOJIS* \| *VIEW_GUILD_INSIGHTS* \| *CONNECT* \| *SPEAK* \| *MUTE_MEMBERS* \| *DEAFEN_MEMBERS* \| *MOVE_MEMBERS* \| *USE_VAD* \| *CHANGE_NICKNAME* \| *MANAGE_NICKNAMES* \| *MANAGE_ROLES* \| *MANAGE_WEBHOOKS* \| *MANAGE_EMOJIS* \| Readonly<BitField<PermissionString\>\>\>): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | *number* \| InviteGenerationOptions \| *CREATE_INSTANT_INVITE* \| *KICK_MEMBERS* \| *BAN_MEMBERS* \| *ADMINISTRATOR* \| *MANAGE_CHANNELS* \| *MANAGE_GUILD* \| *ADD_REACTIONS* \| *VIEW_AUDIT_LOG* \| *PRIORITY_SPEAKER* \| *STREAM* \| *VIEW_CHANNEL* \| *SEND_MESSAGES* \| *SEND_TTS_MESSAGES* \| *MANAGE_MESSAGES* \| *EMBED_LINKS* \| *ATTACH_FILES* \| *READ_MESSAGE_HISTORY* \| *MENTION_EVERYONE* \| *USE_EXTERNAL_EMOJIS* \| *VIEW_GUILD_INSIGHTS* \| *CONNECT* \| *SPEAK* \| *MUTE_MEMBERS* \| *DEAFEN_MEMBERS* \| *MOVE_MEMBERS* \| *USE_VAD* \| *CHANGE_NICKNAME* \| *MANAGE_NICKNAMES* \| *MANAGE_ROLES* \| *MANAGE_WEBHOOKS* \| *MANAGE_EMOJIS* \| *Readonly*<BitField<PermissionString\>\> \| *RecursiveReadonlyArray*<number \| *CREATE_INSTANT_INVITE* \| *KICK_MEMBERS* \| *BAN_MEMBERS* \| *ADMINISTRATOR* \| *MANAGE_CHANNELS* \| *MANAGE_GUILD* \| *ADD_REACTIONS* \| *VIEW_AUDIT_LOG* \| *PRIORITY_SPEAKER* \| *STREAM* \| *VIEW_CHANNEL* \| *SEND_MESSAGES* \| *SEND_TTS_MESSAGES* \| *MANAGE_MESSAGES* \| *EMBED_LINKS* \| *ATTACH_FILES* \| *READ_MESSAGE_HISTORY* \| *MENTION_EVERYONE* \| *USE_EXTERNAL_EMOJIS* \| *VIEW_GUILD_INSIGHTS* \| *CONNECT* \| *SPEAK* \| *MUTE_MEMBERS* \| *DEAFEN_MEMBERS* \| *MOVE_MEMBERS* \| *USE_VAD* \| *CHANGE_NICKNAME* \| *MANAGE_NICKNAMES* \| *MANAGE_ROLES* \| *MANAGE_WEBHOOKS* \| *MANAGE_EMOJIS* \| Readonly<BitField<PermissionString\>\>\> |

**Returns:** *Promise*<string\>

Defined in: node_modules/discord.js/typings/index.d.ts:219

___

### getGuild

▸ **getGuild**(`arg0`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`arg0` | *string* |

**Returns:** *void*

Defined in: [src/client/DiscordClient.ts:13](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/client/DiscordClient.ts#L13)

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:69

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:73

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:70

___

### login

▸ **login**(`token?`: *string*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`token?` | *string* |

**Returns:** *Promise*<string\>

Defined in: node_modules/discord.js/typings/index.d.ts:220

___

### off

▸ **off**<K\>(`event`: K, `listener`: (...`args`: ClientEvents[K]) => *void*): [*default*](client_discordclient.default.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | K |
`listener` | (...`args`: ClientEvents[K]) => *void* |

**Returns:** [*default*](client_discordclient.default.md)

Defined in: node_modules/discord.js/typings/index.d.ts:239

▸ **off**<S\>(`event`: *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\>, `listener`: (...`args`: *any*[]) => *void*): [*default*](client_discordclient.default.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`S` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\> |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*default*](client_discordclient.default.md)

Defined in: node_modules/discord.js/typings/index.d.ts:240

___

### on

▸ **on**<K\>(`event`: K, `listener`: (...`args`: ClientEvents[K]) => *void*): [*default*](client_discordclient.default.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | K |
`listener` | (...`args`: ClientEvents[K]) => *void* |

**Returns:** [*default*](client_discordclient.default.md)

Defined in: node_modules/discord.js/typings/index.d.ts:224

▸ **on**<S\>(`event`: *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\>, `listener`: (...`args`: *any*[]) => *void*): [*default*](client_discordclient.default.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`S` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\> |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*default*](client_discordclient.default.md)

Defined in: node_modules/discord.js/typings/index.d.ts:225

___

### once

▸ **once**<K\>(`event`: K, `listener`: (...`args`: ClientEvents[K]) => *void*): [*default*](client_discordclient.default.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | K |
`listener` | (...`args`: ClientEvents[K]) => *void* |

**Returns:** [*default*](client_discordclient.default.md)

Defined in: node_modules/discord.js/typings/index.d.ts:230

▸ **once**<S\>(`event`: *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\>, `listener`: (...`args`: *any*[]) => *void*): [*default*](client_discordclient.default.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`S` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\> |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*default*](client_discordclient.default.md)

Defined in: node_modules/discord.js/typings/index.d.ts:231

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*default*](client_discordclient.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*default*](client_discordclient.default.md)

Defined in: node_modules/@types/node/events.d.ts:75

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*default*](client_discordclient.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*default*](client_discordclient.default.md)

Defined in: node_modules/@types/node/events.d.ts:76

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:71

___

### removeAllListeners

▸ **removeAllListeners**<K\>(`event?`: K): [*default*](client_discordclient.default.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume* |

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | K |

**Returns:** [*default*](client_discordclient.default.md)

Defined in: node_modules/discord.js/typings/index.d.ts:245

▸ **removeAllListeners**<S\>(`event?`: *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\>): [*default*](client_discordclient.default.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`S` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\> |

**Returns:** [*default*](client_discordclient.default.md)

Defined in: node_modules/discord.js/typings/index.d.ts:246

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*default*](client_discordclient.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*default*](client_discordclient.default.md)

Defined in: node_modules/@types/node/events.d.ts:65

___

### setImmediate

▸ **setImmediate**(`fn`: (...`args`: *any*[]) => *void*, ...`args`: *any*[]): *Immediate*

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (...`args`: *any*[]) => *void* |
`...args` | *any*[] |

**Returns:** *Immediate*

Defined in: node_modules/discord.js/typings/index.d.ts:137

___

### setInterval

▸ **setInterval**(`fn`: (...`args`: *any*[]) => *void*, `delay`: *number*, ...`args`: *any*[]): *Timeout*

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (...`args`: *any*[]) => *void* |
`delay` | *number* |
`...args` | *any*[] |

**Returns:** *Timeout*

Defined in: node_modules/discord.js/typings/index.d.ts:135

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*default*](client_discordclient.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*default*](client_discordclient.default.md)

Defined in: node_modules/@types/node/events.d.ts:68

___

### setTimeout

▸ **setTimeout**(`fn`: (...`args`: *any*[]) => *void*, `delay`: *number*, ...`args`: *any*[]): *Timeout*

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (...`args`: *any*[]) => *void* |
`delay` | *number* |
`...args` | *any*[] |

**Returns:** *Timeout*

Defined in: node_modules/discord.js/typings/index.d.ts:136

___

### sweepMessages

▸ **sweepMessages**(`lifetime?`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`lifetime?` | *number* |

**Returns:** *number*

Defined in: node_modules/discord.js/typings/index.d.ts:221

___

### toJSON

▸ **toJSON**(): *object*

**Returns:** *object*

Defined in: node_modules/discord.js/typings/index.d.ts:222

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | *EventEmitter* |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:44