 const Gamedig = require('gamedig');

client.on('ready', async(message) => {
  client.setInterval(() => {

Gamedig.query({
    type: 'minecraft',
    host: db.fetch(`codemingtr`) || 'mc.hypixel.net'
}).then((state) => {
moment.locale('tr')
let codeming = client.channels.get('kanal id')
let pingkanal = client.channels.get('2.kanal id')
let oyuncusayı = client.channels.get('3.kanal id')
let harita = client.channels.get('4.kanal id')
let ip = client.channels.get('5.kanal id')
let sonyenilenme = client.channels.get('6.kanal id')
codeming.setName('Sunucu: '+state.name)
pingkanal.setName('Ping: '+state.ping)
oyuncusayı.setName('Oyuncu Sayısı: '+state.players.length+' / '+state.maxplayers)
harita.setName('Harita: '+state.map)
ip.setName('İp: '+state.connect)
sonyenilenme.setName('Son Yenilenme: '+moment().add(3, 'hours').format('LTS'))
})
  
}, 4000) 
})
