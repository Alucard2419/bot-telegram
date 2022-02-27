const {Telegraf} = require('telegraf')

const bot = new Telegraf('5265297575:AAFnUaYsebBfhq8pCDPHHJAdd49Q46UZp-I')

bot.start((ctx)=>{
    ctx.reply('Welcome');
})
bot.help((ctx)=>{
    ctx.reply('Welcome');
})
bot.settings((ctx)=>{
    ctx.reply('Welcome');
})

bot.launch()