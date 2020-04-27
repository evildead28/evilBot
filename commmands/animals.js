const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = async (client, message, args) => {
  message.delete({ timeout: 2000 });

  if (args[0] === "cat") {
    const cat = await fetch("https://aws.random.cat/meow")
    .then(res => res.json())
    .then(json => json.file);

    const embed = new MessageEmbed()
    .setImage(cat)
    .setFooter("Powwered by 'https://aws.random.cat/meow'");
    message.channel.send(embed);
  } else if (args[0] === "dog") {
    const dog = await fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(json => json.message);

    const embed = new MessageEmbed()
    .setImage(dog)
    .setFooter("Powwered by 'https://dog.ceo/api/breeds/image/random'");
    message.channel.send(embed);      
  } else if (args[0] === "fox") {
    const fox = await fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(json => json.image);

    const embed = new MessageEmbed()
    .setImage(fox)
    .setFooter("Powwered by 'https://randomfox.ca/floof/'");
    message.channel.send(embed);      
  } else {
    message.channel.send("Les animaux disponibles sont: cat, dog, fox!");
  }
};