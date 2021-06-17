import { YinYangCommand } from '../../index';

export class ClearWarnCommand extends YinYangCommand.Command {
  constructor() {
    super({
      aliases: ['cw', 'cwarn', 'clearwarn'],
      category: YinYangCommand.CommandCategories.MODERATOR,
      description: 'Clears all warnings for a user',
      enabled: false,
      name: 'clearwarns',
      usage: 'clearwarns <user>',
    });
  }

  async runNormal(ctx: YinYangCommand.CommandContext) {
    // Not implemented
  }
}
