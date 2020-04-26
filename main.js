const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableMentions : "everyone" });

client.on("message", msg => {
  if (msg.author.bot) return;
  const args = msg.content.slice(PREFIX.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  console.log(args);
  console.log(cmd);
  if (cmd === "repeat") {
    msg.channel.send(args.join(" ")),
    msg.delete({ timeout: 2000 }).then(console.log("Un message a été supprimé"));
  }
  if(cmd ==="role") {
  const channel = client.channels.cache.find(r => r.name === "logs");
  const role = msg.guild.roles.cache.find(r => r.name === args[0]);
  if (!role) return msg.channel.send("Ce rôle n'existe pas !");

    if (msg.member.roles.cache.find(r => r.name === args[0])) {
      msg.member.roles.remove(role);
      channel.send(`J'ai supprimé le rôle ${role} à ${msg.author}.`);
      msg.delete({ timeout: 2000 });
    } else {
      msg.member.roles.add(role);
      channel.send(`J'ai ajouté le rôle ${role} à ${msg.author}.`);
      msg.delete({ timeout: 2000 });
    }
  }
});

client.on("guildMemberAdd", member => {
 member.send("Salut à toi !!! Bienvenue sur Mon Discord !");
  const channel = client.channels.cache.find(r => r.name === "logs");  
  channel.send(`${member} a rejoint le serveur !!!`);
});

client.on("guildMemberRemove", member => {
  const channel = client.channels.cache.find(r => r.name === "logs");
  channel.send(`${member} a quitté le serveur!!`);
})

client.login(TOKEN);

client.on("ready", () => console.log("EvilDeadBot est pret"));
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);

