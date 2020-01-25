const { Client } = require("discord.js");
const { PREFIX, TOKEN } = require("./config");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(` ${client.user.tag} est prête!`);
});

client.on("message", msg => {
  if (msg.content.startsWith(PREFIX + "ping")) msg.channel.send("Pong!");

  if (msg.content.startsWith(PREFIX + "enfin"))
    msg.channel.send("Tu as réussi papa!");
});

client.login(TOKEN);
