const { Client } = require("discord.js");
const { PREFIX, TOKEN } = require("./config");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(` ${client.user.tag} est prête!`);
});

client.on("message", msg => {
  if (msg.content.startsWith(PREFIX + " ping")) msg.channel.send("Pong!");
  if (msg.content.startsWith(PREFIX + " pong")) msg.channel.send("Ping!");
  if (msg.content.startsWith(PREFIX + " pingpong"))
    msg.channel.send("C'est du tenis de table!");
  if (msg.content.startsWith(PREFIX + " iva"))
    msg.channel.send(
      "Je suis Iva. Le bot développez par Varek. Je suis utile pour la modération, mais aussi te faire écouté des musiques sur youtube. N'hésite pas à m'utilisez. Et si tu rencontre un souci, contacte Ｖａｒｅｋ3459"
    );

  if (msg.content.startsWith(PREFIX + "enfin"))
    msg.channel.send("Tu as réussi papa!");
});

client.login(TOKEN);
