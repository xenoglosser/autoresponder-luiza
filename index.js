const token = "your-token-here"
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [Object.keys(GatewayIntentBits)] });

// actual code
client.on("messageCreate", async (message) => {
  if (message.author.bot) return false;
  if (message.content.includes("luiza")) {
    message.reply(`lu siyeon's wife`);
  }
});

client.login(token);
