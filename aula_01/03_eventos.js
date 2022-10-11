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
    const name = ctx.update.message.from.first_name
    ctx.reply(`Olá! Seja bem vindo ${name}!
        Eu sou o um 'bot' em treinamento!
        Por enquanto eu:
            - repito o que você Digita
            - Digo as cordenadas de latitude e longetude 
    `)
});

bot.startPolling()
