import { Composer, Markup } from 'telegraf'
import { keyboards } from '../libs/keyboards.js'
import { getLang } from '../libs/lang.js'
import { inlineMenuElonBerish, inlineMenuElonBerishRus, menu_elon_rus, menu_elon_uzb } from '../libs/menu_elon.js'
import { bot } from '../main.js'
import { User } from '../models/user.model.js'

const composer = new Composer()

composer.hears("📣 E'lon berish", async (ctx) => {
  const user_id = ctx.from.id

  await User.findOne({ where: { user_id: `${user_id}` } }).then(async (user) => {
    if (!user) {
      await ctx.reply('Botga "/start" tugmasini qayta kiriting')
    } else {
      if (user.dataValues.phone_number == ' ' || user.dataValues.phone_number == null) {
        await ctx.reply('Iltimos <b>"Telefon raqami yuborish"</b> tugmasini bosing!', {
          parse_mode: 'HTML',
          ...Markup.keyboard([[Markup.button.contactRequest('Telefon raqami yuborish'), 'Bosh sahifa']])
            .oneTime()
            .resize(),
        })
      } else {
        menu_elon_uzb(ctx)
      }
    }
  })
})

composer.hears("📣 E'lon berish", async (ctx) => {
  const user_id = ctx.from.id

  await User.findOne({ where: { user_id: `${user_id}` } }).then(async (user) => {
    if (!user) {
      await ctx.reply('Botga "/start" tugmasini qayta kiriting')
    } else {
      if (user.dataValues.phone_number == ' ' || user.dataValues.phone_number == null) {
        await ctx.reply('Iltimos <b>"Telefon raqami yuborish"</b> tugmasini bosing!', {
          parse_mode: 'HTML',
          ...Markup.keyboard([[Markup.button.contactRequest('Telefon raqami yuborish'), 'Bosh sahifa']])
            .oneTime()
            .resize(),
        })
      } else {
        menu_elon_uzb(ctx)
      }
    }
  })
})

composer.hears('📣 Подать объявление', async (ctx) => {
  const user_id = ctx.from.id
  await User.findOne({ where: { user_id: `${user_id}` } }).then(async (user) => {
    if (!user) {
      await ctx.reply(`Повторно войти в бот через "/start"`)
    } else {
      if (user.dataValues.phone_number == '' || user.dataValues.phone_number == null) {
        await ctx.reply(`Нажмите кнопку <b>Отправить номер телефона</b> 👇`, {
          parse_mode: 'HTML',
          ...Markup.keyboard([[Markup.button.contactRequest('📱 Отправить номер телефона'), '🏠 Главная страница']])
            .oneTime()
            .resize(),
        })
      } else {
        menu_elon_rus(ctx)
      }
    }
  })
})

composer.hears('yangi elon qoshish', async (ctx) => {
  await User.findOne({ where: { user_id: `${ctx.from.id}` } }).then(async (user) => {
    if (user) {
      await user.update({ last_state: 'finish' })
    }
  })
  menu_elon_uzb(ctx)
  await inlineMenuElonBerish(ctx, '<b>Yangi elon qoshish uchun quyidagilardan birini tanglang</b>')
})

composer.hears('🆕 Добавить новое объявление', async (ctx) => {
  await User.findOne({ where: { user_id: `${ctx.from.id}` } }).then(async (user) => {
    if (user) {
      await user.update({ last_state: 'finish' })
    }
  })
  menu_elon_rus(ctx)
  await inlineMenuElonBerishRus(ctx, `<b>Выберите нужный раздел, чтобы добавить новую объявлению:</b>`)
})

composer.action('andoza', async (ctx) => {
  const lang = await getLang(String(ctx?.from?.id))
  if (lang === 'UZB') {
    await ctx.editMessageText('<b>Kerakli andoza tanlang:</b>', {
      parse_mode: 'HTML',
      ...keyboards['inline_andoza'],
    })
  } else {
    await ctx.editMessageText('<b>Выберите нужный шаблон:</b>', {
      parse_mode: 'HTML',
      ...keyboards['inline_andoza_rus'],
    })
  }
})

bot.use(composer.middleware())
