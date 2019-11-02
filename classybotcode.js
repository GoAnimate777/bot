const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
 
client.login("NjMwODUwMTg0MzkzNTIzMjM2.Xb4LGA.j0HHgMZEyN4urvia-fyJ479meWI");
