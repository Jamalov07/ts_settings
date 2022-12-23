const { Telegraf, Markup, HTML } = require("telegraf");
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", (ctx) =>
  ctx.reply("Assalomu alaykum. Buyruqlar /sorov /savol /markup /audio /html /video /gif")
);

bot.command("rasm", (ctx) =>
  ctx.replyWithPhoto({ source: path.join(__dirname, "media", "rasm.jpg") })
);

bot.command("video", (ctx) =>
  ctx.replyWithVideo({
    source: fs.createReadStream(path.join(__dirname, "media", "video.mp4")),
  })
);

bot.command("gif", (ctx) =>
  ctx.replyWithAnimation({
    source: path.join(__dirname, "media", "animation.mp4"),
  })
);

bot.command("audio", (ctx) =>
  ctx.replyWithAudio({ source: path.join(__dirname, "media", "audio.mp3") })
);

bot.command("html", (ctx) =>
  ctx.sendMessage(
    fs.readFileSync(path.join(__dirname, "media", "index.html"), "utf8"),
    { parse_mode: "HTML" }
  )
);

bot.command("sorov", (ctx) =>
  ctx.replyWithPoll(
    "Quyidagilarnining qaysi biri sog`liq uchun zararli deb hisoblaysiz?",
    ["cola", "qalampir", "cofe", "himikatli yeguliklar", "bilmadim"],
    { is_anonymous: false }
  )
);

bot.command("savol", (ctx) =>
  ctx.replyWithQuiz(
    "Qaysi so`z 3 bogindan iborat",
    ["ruchka", "shamol", "gilos", "banan", "qulupnay"],
    { correct_option_id: 4 }
  )
);

bot.command("markup", (ctx) => {
  console.log(ctx.message);
  return ctx.replyWithHTML(
    "Assalomu alaykum <i>" + ctx.message.chat.first_name + "</i>",
    {
      parse_mode: "HTML",
      ...Markup.inlineKeyboard([
        Markup.button.callback("Vaalaykum assalom. Mullo boling", "ws"),
      ]),
    }
  );
});

bot.action("ws", (ctx) => {
  ctx.reply("<i>Ahvolingiz qalay?</i>", {
    parse_mode: "HTML",
    ...Markup.inlineKeyboard([
      Markup.button.callback("Alo", "hamd"),
      Markup.button.callback("Yaxshi", "all-right"),
      Markup.button.callback("Yomon emas", "not-bad"),
      Markup.button.callback("yomon", "dont-ask"),
    ]),
  });
});

bot.action("dont-ask", (ctx) => {
  return ctx.answerCbQuery("siqilmang hammasi yaxshi boladi");
});

bot.action("not-bad", (ctx) => {
  return ctx.reply("Kuningiz yaxshi otsin");
});

bot.action("all-right", (ctx) => {
  return ctx.reply("Kuningiz bundanda yaxshi otsin");
});

bot.action("hamd", (ctx) => {
  return ctx.reply(
    "Hursandman. Buyurtma berish uchun tugmalardan birini bosing",
    {
      parse_mode: "HTML",
      ...Markup.keyboard([
        ["Suyuq", "Quyuq"],
        ["Salat", "ichimlik"],
        ["Shirinlik", "Meva"],
      ])
        .oneTime()
        .resize(),
    }
  );
});

bot.hears("Meva", (ctx) => {
  ctx.reply(
    "Meva tanlang",
    Markup.keyboard([
      ["tarvuz", "qovun"],
      ["olma", "anor"],
      ["gilos", "nok"],
    ])
      .oneTime()
      .resize()
  );
});

bot.hears("anor", (ctx) => {
  return ctx.reply("ajoyib tanlov");
});

bot.hears("tarvuz", (ctx) => {
  return ctx.reply("ajoyib tanlov");
});

bot.hears("qovun", (ctx) => {
  return ctx.reply("ajoyib tanlov");
});


bot.launch().then(console.log("ishga tushdik"));

const { Telegraf, Markup, HTML } = require("telegraf");
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", (ctx) =>
  ctx.reply("Assalomu alaykum. Buyruqlar /sorov /savol /markup /audio /html /video /gif")
);

bot.command("rasm", (ctx) =>
  ctx.replyWithPhoto({ source: path.join(__dirname, "media", "rasm.jpg") })
);

bot.command("video", (ctx) =>
  ctx.replyWithVideo({
    source: fs.createReadStream(path.join(__dirname, "media", "video.mp4")),
  })
);

bot.command("gif", (ctx) =>
  ctx.replyWithAnimation({
    source: path.join(__dirname, "media", "animation.mp4"),
  })
);

bot.command("audio", (ctx) =>
  ctx.replyWithAudio({ source: path.join(__dirname, "media", "audio.mp3") })
);

bot.command("html", (ctx) =>
  ctx.sendMessage(
    fs.readFileSync(path.join(__dirname, "media", "index.html"), "utf8"),
    { parse_mode: "HTML" }
  )
);

bot.command("sorov", (ctx) =>
  ctx.replyWithPoll(
    "Quyidagilarnining qaysi biri sog`liq uchun zararli deb hisoblaysiz?",
    ["cola", "qalampir", "cofe", "himikatli yeguliklar", "bilmadim"],
    { is_anonymous: false }
  )
);

bot.command("savol", (ctx) =>
  ctx.replyWithQuiz(
    "Qaysi so`z 3 bogindan iborat",
    ["ruchka", "shamol", "gilos", "banan", "qulupnay"],
    { correct_option_id: 4 }
  )
);

bot.command("markup", (ctx) => {
  console.log(ctx.message);
  return ctx.replyWithHTML(
    "Assalomu alaykum <i>" + ctx.message.chat.first_name + "</i>",
    {
      parse_mode: "HTML",
      ...Markup.inlineKeyboard([
        Markup.button.callback("Vaalaykum assalom. Mullo boling", "ws"),
      ]),
    }
  );
});

bot.action("ws", (ctx) => {
  ctx.reply("<i>Ahvolingiz qalay?</i>", {
    parse_mode: "HTML",
    ...Markup.inlineKeyboard([
      Markup.button.callback("Alo", "hamd"),
      Markup.button.callback("Yaxshi", "all-right"),
      Markup.button.callback("Yomon emas", "not-bad"),
      Markup.button.callback("yomon", "dont-ask"),
    ]),
  });
});

bot.action("dont-ask", (ctx) => {
  return ctx.answerCbQuery("siqilmang hammasi yaxshi boladi");
});

bot.action("not-bad", (ctx) => {
  return ctx.reply("Kuningiz yaxshi otsin");
});

bot.action("all-right", (ctx) => {
  return ctx.reply("Kuningiz bundanda yaxshi otsin");
});

bot.action("hamd", (ctx) => {
  return ctx.reply(
    "Hursandman. Buyurtma berish uchun tugmalardan birini bosing",
    {
      parse_mode: "HTML",
      ...Markup.keyboard([
        ["Suyuq", "Quyuq"],
        ["Salat", "ichimlik"],
        ["Shirinlik", "Meva"],
      ])
        .oneTime()
        .resize(),
    }
  );
});

bot.hears("Meva", (ctx) => {
  ctx.reply(
    "Meva tanlang",
    Markup.keyboard([
      ["tarvuz", "qovun"],
      ["olma", "anor"],
      ["gilos", "nok"],
    ])
      .oneTime()
      .resize()
  );
});

bot.hears("anor", (ctx) => {
  return ctx.reply("ajoyib tanlov");
});

bot.hears("tarvuz", (ctx) => {
  return ctx.reply("ajoyib tanlov");
});

bot.hears("qovun", (ctx) => {
  return ctx.reply("ajoyib tanlov");
});


bot.launch().then(console.log("ishga tushdik"));

