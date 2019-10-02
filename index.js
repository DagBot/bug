const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!!";

client.login("NjI3ODI4ODM4NDc0MTg2Nzk1.XZCVSQ.gxC7jNKgyXs-J8IpsqHKgOyPYxA");

client.on("guildMemberRemove", user => {
    let leaveEmbed = new Discord.RichEmbed()
        .setColor("#f02d17")
        .setAuthor(user.user.username,user.user.displayAvatarURL)
            .setDescription("<:pleure:627883270410993664> Malheuresement " + user.user.username + " a quitté serveur <:Nul:627883558567936011> " + user.guild.name + " il n'a finalement pas mis de pailletes dans nos vie ")
    .setFooter("Communauté Dagdaali | DagBot ")
    user.guild.channels.get("626155550337400862").send(leaveEmbed)

})

client.on("guildMemberAdd", user =>{
    let joinEmbed = new Discord.RichEmbed()
        .setColor("#25ee25")
        .setAuthor(user.user.username,user.user.displayAvatarURL)
            .setDescription("<:panda:627883584941981716> Bienvenue " + user + " sur le serveur " + user.guild.name + " va voir le règlement pour profiter ensuite pleinement du serveur sans être sanctionné essaye de mettre des pailletes dans nos vie <a:cool:627884988125151264> ")
    .setFooter("Communauté Dagdaali | DagBot ")
    user.guild.channels.get("626155550337400862").send(joinEmbed)

});


client.on('guildMemberAdd', member => {
    member.addRole('625569232347987970')
});

client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() === '!!kick'){
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(" Vous n'avez pas la permission d'utiliser cette commande.")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un utilisateur.")
        if (member.highestRole.calculatedPosition >= message .member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas exclure cet utilisateur.")
        if (!member.kickable) return message.channel.send("Le Grand Dagdaali ne m'a pas donné la permission d'exclure cet utilisateur.")
        member.kick()
        message.channel.send(member.user.username + " **a bien été exclu !**")
    }
})


client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === "!!ban") {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un utilisateur.")
        if (member.highestRole.calculatedPosition >= message .member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur.")
        if (!member.bannable) return message.channel.send("Le Grand Dagdaali ne m'a pas donné la permission de bannir cet utilisateur.")
        message.guild.ban(member, {days: 7})
        message.channel.send(member.user.username + " **a bien été banni !**")
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix  + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = parseInt(args[1])
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(count + 1, true)
    }
})

client.on('message', message => {
    if (message.content.startsWith(prefix + 'say')) {
            let args = message.content.slice(6).trim().split(/ +/g)
            let say = args.join(" ")
            let say_embed = new Discord.RichEmbed()
            .setTitle(say)
            .setColor('0xefd807')

            message.channel.send(say_embed)
            message.delete()
    }
})



