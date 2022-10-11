// importando as variaveis de ambiente
const env = require('../.env');

// importando a bilblioteca telegraf
const {Telegraf} = require('telegraf');

/**
 * criando o objeto 'bot' e o intanciando como um novo objeto da classe 'telegraf'
 **/
const bot = new Telegraf(env.token);

// iniciando o 'bot'
bot.start(ctx => {
    const from = ctx.update.message.from
    if (from.username === 'Lialltai'){
        ctx.reply(`Olá! Seja bem vindo ${from.first_name}!`)

        bot.on('text', async(ctx, next) =>{
            await ctx.reply(`Resposta 1`)
            next();
        })
    }
    
});

//dando continuidade a conversa 


bot.startPolling()
