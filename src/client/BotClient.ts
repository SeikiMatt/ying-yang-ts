import path from 'path';
import {
  Collection, ClientOptions, Message, GuildMember, User, Snowflake,
} from 'discord.js';
import {
  Database, YinYangCommand, Event, Logger, Files, DiscordClient,
  YinYangPermissions, MusicManager,
} from '../index';

/**
 * @interface BotClient
 */
export interface BotClient {
  aliases: Collection<string, string>;
  client: DiscordClient;
  commands: Collection<string, YinYangCommand.Command>;
  database: Database;
  events: Collection<string, Event>;
  logger: Logger;
  perms: YinYangPermissions.Levels[];
  subscriptions: Map<Snowflake, MusicManager>;
}

/**
 * This class is used to keep the bots various properties separate from
 * the discord.js Client class.
 * ```js
 * const bot = new BotClient(options)
 * ```
 */
export class BotClient {
  /**
   * Creates an instance of BotClient.
   * @param options - represents discord.js' ClientOptions
   */
  constructor(options: ClientOptions) {
    this.aliases = new Collection();
    this.client = new DiscordClient(options, this);
    this.commands = new Collection();
    this.database = new Database();
    this.events = new Collection();
    this.logger = new Logger();
    this.perms = YinYangPermissions.Permissions;
    this.subscriptions = new Map<Snowflake, MusicManager>();

    Files.LoadFiles(path.join(__dirname, '..', 'commands'), this);
    Files.LoadFiles(path.join(__dirname, '..', 'events'), this);
  }

  /**
   * This method is used to start the bots initialization process
   * ```js
   * without sentry support.
   * bot.init(String(process.env.TOKEN));
   * with sentry support.
   * bot.init(String(process.env.TOKEN), Sentry);
   * ```
   * @param token - The bots token from discord.com
   * @param sentry - Send sentry through so it can be used by the bot
   * @param options - nothing for now maybe one day.
   * @returns {void}
   */
  init(token: string, sentry?: any, options?: null) {
    // #region Capture Errors
    this.client.on('error', (error) => {
      this.logger.error(error);

      if (sentry == null) {
        this.logger.info('Sentry was not provided');
        return;
      }
      sentry.captureException(error);
    });
    // #endregion

    // #region  Client Login
    this.client.login(token)
      .then(() => {
        this.logger.debug('Using token to login');
      })
      .catch((error) => {
        this.logger.error(
          `${error.name}:\n  ${error.message}\n${error.stack.replace(
            `${error.name}: ${error.message}`, '',
          )}`,
        );
      })
      .finally(() => {
        this.logger.info('Bot is Ready');
      });
    // #endregion
  }

  /**
   * Used to run some basic dev related logging, such as discord debugging
   * ```js
   * if (process.env.NODE_ENV !== 'production') bot.dev();
   * ```
   * @returns {void}
   */
  dev() {
    this.client.on('debug', (debug) => {
      const words = ['heartbeat', 'heartbeat.', 'token:', 'swept'];
      const msg = debug.toLowerCase().split(' ');
      const filtered = msg.filter((word) => words.includes(word));

      if (filtered.length <= 0) {
        this.logger.debug(debug);
      }
    });
  }
}
