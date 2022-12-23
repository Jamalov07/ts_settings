// import { Context } from "telegraf";
import { sequelize } from './db.js'
import { Telegraf } from 'telegraf'

// interface SessionData {
//     heyCounter:number,
// }

// interface BotContext extends Context {
//     session?:SessionData;
// }

const token = String(
  process.env.BOT_TOKEN,
)
export const bot = new Telegraf(token)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
  } catch (error) {
    console.log('BD ERROR')
    console.log(error)
  }
}

start()

bot.launch()
