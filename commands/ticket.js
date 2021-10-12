    const disbut = require('discord-buttons');
    const { MessageButton, MessageActionRow } = require('discord-buttons');

    module.exports = {
        name: 'ticket',
        description: 'ticket command!',
        async execute(message, args, Discord, helper){
            if(message.member.permissions.has('ADMINISTRATOR')){

            
            const button = new disbut.MessageButton()
            .setLabel("Ticket") 
            .setStyle("gray")
            .setEmoji("🎫")
            .setID("donate")

            const button2 = new disbut.MessageButton()
            .setLabel("Other")
            .setStyle("red")
            .setEmoji("❓")
            .setID("support")


            let row = new MessageActionRow()
            .addComponent(button)
            .addComponent(button2);


            const info = new Discord.MessageEmbed()
            .setAuthor('📩Ticket')
            .setDescription('**To open a ticket react with the 📩 **')
            .setColor('#fc0307')
            .setFooter(message.guild.name)
            message.channel.send({
                component: row,
                embed: info
            });




        

    helper.on('clickButton', async (button) => {
        if(button.id === 'donate'){
            await button.defer(); //nothing
            
            
            var donate = await message.guild.channels.create(`🎫ticket-${button.clicker.user.username}`, {
                permissionOverwrites: [
                    {
                        id: button.clicker.user.id,
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    },
                    {
                        id: message.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ],
                type: 'text'
            })      }

            const dbutton = new disbut.MessageButton()
            .setLabel("Close")
            .setStyle("red")
            .setEmoji("📛")
            .setID("close")
            
            const dinfo = new Discord.MessageEmbed()
            .setAuthor('📩Ticket')
            .setDescription('**The support will be soon with you.\n To close the ticket react with the 📛**')
            .setColor('#fc0307')
            .setFooter(message.guild.name)
            donate.send({
                component: dbutton,
                embed: dinfo
            });

            helper.on('clickButton', async (button) => {
                if(button.id === 'close'){
                await donate.delete();
                }
            })

    })

    
    helper.on('clickButton', async (button) => {
        if(button.id === 'support'){
            await button.defer(); //nothing
        
        
        var support = await message.guild.channels.create(`❓other-${button.clicker.user.username}`, {
            permissionOverwrites: [
                {
                    id: button.clicker.user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        })      }

        const sbutton = new disbut.MessageButton()
        .setLabel("Close")
        .setStyle("red")
        .setEmoji("📛")
        .setID("close")
        
        const sinfo = new Discord.MessageEmbed()
        .setAuthor('📩Ticket')
        .setDescription('**The support will be soon with you.\n To close the ticket react with the 📛**')
        .setColor('#fc0307')
        .setFooter(message.guild.name)
        support.send({
            component: sbutton,
            embed: sinfo
        });

        helper.on('clickButton', async (button) => {
            if(button.id === 'close'){
                await support.delete();
            }
        })

    })

    }

        }
    }

