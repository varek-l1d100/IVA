const { Client } = require("discord.js");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(`Connectée sous le nom ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.channel.send("Pong!");
  if (msg.content === "everyone")
    msg.channel.send("@everyone salut à tous!", { disableEveryone: false });
  if (msg.content === "noteveryone")
    msg.channel.send("@everyone (noteveryone) Salut à tous!");
});

client.login("NjcwMzY3NjAyMzQ1OTAyMDgx.Xiyj3w.z3HBUiroFKf86EiEzmqm5nHmL7I");
