const Discord = require('discord.js');
const data = require('croxydb');


exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(
new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '')
.setColor('#f6ff00')
.setTitle('Bir hata oldu!').setDescription(`• \`sunucukur-j4j\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`)
.addField('Sunucu Sahibi', message.guild.owner.user.tag));

message.channel.send(new Discord.MessageEmbed()
.setColor('#f6ff00')
.setTitle('J4J Tema')
.setThumbnail('')
.setFooter(`Ping: ${client.ws.ping.toFixed(0)}`, client.user.avatarURL({dynamic: true}))
.setDescription(`${message.author} **Sunucunun** kurulmasını onaylıyor musun? 😇

**Dipnot:** Bazı kanllar silinmemiş gibi görünebilir. Discord dan çıkıp girin düzelir.`)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());
  
message.guild.roles.create({ data: { name: '👑' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '🔧' }, reason: 'ayn' }).then(s => s.setColor('#f6ff00'))
message.guild.roles.create({ data: { name: '🤖' }, reason: 'ayn' }).then(s => s.setColor('#ff56ff'))


message.guild.channels.create('📣 Duyuru 📣', {type: 'category'}).then(parent => {
message.guild.channels.create('📢 ・duyuru', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🚀 ・boost', {type: 'text'}).then(c => c.setParent(parent.id));
});


message.guild.channels.create('J4J KANALLARI', {type: 'category'}).then(parent => {
message.guild.channels.create('⚡j4j-fast', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🚀j4j-ads', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('İNVİTE BİLGİSİ', {type: 'category'}).then(parent => {
message.guild.channels.create('📩davet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💻komut', {type: 'text'}).then(c => c.setParent(parent.id));
})
});

no.on('collect', async reaction => {
resulter.delete();
});

})


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sunucukur-j4j'
};
