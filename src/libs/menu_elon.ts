import { Context, Markup } from 'telegraf'
import { keyboards } from './keyboards.js'

export async function menu_elon_uzb(ctx: Context) {
  await ctx.reply('Yangi elonni qoshish tugmasini bosing', {
    parse_mode: 'HTML',
    ...Markup.keyboard([
      ['Yangi elonni qoshish'],
      ['tilni tanlash', 'men bergan elonlar'],
      ['bosh sahifa', 'elon berish tartibi'],
    ])
      .oneTime()
      .resize(),
  })
}

export async function menu_elon_rus(ctx: Context) {
  await ctx.reply('<b>Добавить новое объявление</b> 👇', {
    parse_mode: 'HTML',
    ...Markup.keyboard([
      ['🆕 Добавить новое объявление'],
      ['☸ Выбор языка', 'Мои объявления'],
      ['🏠 Главная страница', '💁 Рекламная процедура'],
    ])
      .oneTime()
      .resize(),
  })
}

export async function inlineMenuElonBerish(ctx: Context, inlineElonText: string) {
  return await ctx.reply(inlineElonText, {
    parse_mode: 'HTML',
    ...keyboards['inline_menu_elon_berish'],
  })
}

export async function inlineMenuElonBerishRus(ctx: Context, inlineElonText: string) {
  return await ctx.reply(inlineElonText, {
    parse_mode: 'HTML',
    ...keyboards['inline_menu_elon_berish_rus'],
  })
}
