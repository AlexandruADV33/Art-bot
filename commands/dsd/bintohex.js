const discord = require("discord.js");
//the variables may confuse but its implementation is correct
module.exports.run = async (bot, message, args) => {
    if(!args) return message.reply("You cant leave this empty!");
    var zap = args;
    var yam = ""+zap;
    var k=0;
    var abc = "";
    var xyz = "";
    for(var i=0;i<yam.length;i++){
        if(yam.charAt(i)=="."){
            k=i;
        }
    }
    if(k==0){
    if(yam.length % 4 != 0){
    while(true){
        yam = "0"+yam;
        if(yam.length % 4 == 0) break;
    }
    }
    var hexa = parseInt(yam, 2).toString(16).toUpperCase();
    message.channel.send(hexa);
    }
    else{
        for(var z=0;z<k;z++){
            xyz +=yam.charAt(z);
        }
        if(xyz.length % 4 != 0){
            while(true){
                xyz = "0"+xyz;
                if(xyz.length % 4 == 0) break;
            }
        }
        var hexa = parseInt(xyz, 2).toString(16).toUpperCase();
        for(var i=0;i<yam.length;i++){
        if(yam.charAt(i)=="."){
            k=i;
        }
    }
        for(var j=k+1;j<yam.length;j++)
        {
            abc +=yam.charAt(j);          
        }
        if(abc.length % 4 !=0){
            while(true){
                abc = abc+"0";
                if(abc.length % 4 == 0) break;
            }
        }
        var hex = parseInt(abc, 2).toString(16).toUpperCase();
        message.channel.send(hexa+"."+hex);
    }
};
module.exports.help = {
	name: "bintohex",
    aliases: ['bh']
};