import { getColorFromURL } from 'color-thief-node';
import { ColorResolvable } from 'discord.js';

import { YinYangCommand, Embed } from '../../index';

export class AvatarCommand extends YinYangCommand.Command {
  constructor() {
    super({
      category: YinYangCommand.CommandCategories.GENERAL,
      description: 'Display a users avatar',
      name: 'avatar',
      usage: 'avatar [user]',
    });
  }

  async runSlash(ctx: YinYangCommand.SlashContext) {
    const { commandInteraction: interaction } = ctx;

    const user = interaction.options.get('user')?.user ?? interaction.user;
    const avatarUrl = user.displayAvatarURL({ dynamic: true, format: 'png', size: 4096 });

    let dominantColor;
    try {
      dominantColor = await getColorFromURL(avatarUrl);
    } catch (e) {
      dominantColor = 'BLURPLE';
    }

    const embed = new Embed()
      .setImage(avatarUrl)
      .setTitle(`Profile Picture for ${user.username}`)
      .setColor(dominantColor as ColorResolvable);
    await interaction.reply({ embeds: [embed] });
  }
}
