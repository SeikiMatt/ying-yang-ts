// #region Imports
import * as Sentry from '@sentry/node';
import 'dotenv/config';
import 'tsconfig-paths/register';
import './structures';

import BotClient from './client/BotClient';
import { clientOptions } from './util/Constants';
// #endregion

// #region Declare new BotClient
const bot = new BotClient(clientOptions);
// #endregion

// #region Sentry
Sentry.init({
  release: `${process.env.npm_package_name}@${process.env.npm_package_version}`,
  environment: 'development',
  dsn: process.env.SentryDSN,
  tracesSampleRate: 1.0,
  attachStacktrace: true,

  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
  ],
});

const transaction = Sentry.startTransaction({
  op: 'transaction',
  name: 'My Transaction',
});

Sentry.configureScope((scope) => {
  scope.setSpan(transaction);
});
// #endregion

// #region Bot Minor Events
bot.client
  .on('error', (error) => {
    bot.logger.error(error.message);
    Sentry.captureException(error);
  });
// #endregion

// #region Bot Login
bot.client.login(process.env.TOKEN).then(() => {
  if (process.env.DEBUG) bot.logger.debug('Using token to login');
}).catch((error) => {
  bot.logger.error(`${error.name}:\n  ${error.message}\n${error.stack.replace(`${error.name}: ${error.message}`, '')}
    `);
});
// #endregion
