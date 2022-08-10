const fs = require('fs')
const chalk = require('chalk')

// Website Api Nya Bng
global.APIs = {
	zenz: 'https://api.lolhuman.xyz',
}

// Udah Free Apikey Jadi Klo Mau Ubah Silahkan
global.APIKeys = {
	'https://api.lolhuman.xyz': 'azzbot',
}

// Other
global.namabot = ['Rel°Bot-MD']
global.namaowner = ['Farel']
global.owner = ['6282290452317','6283156687953']
global.premium = ['6282290452317','6283156687953']
global.packname = 'Rel°Bot-MD'
global.author = 'By Farel/naufal'
global.sessionName = 'Xavior'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '៚'
global.mess = {
    success: 'Berhasil✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Jadikan Bot Admin Terlebih Dahulu!',
    owner: 'Khusus Owner Bot',
    group: 'pengunaan di dalam group',
    private: 'pengunaan di pc',
    bot: 'Khusus Nomor Bot',
    wait: 'Tolong beri waktu!!, Bot sedang memproses..',
    endLimit: 'Limit anda habis!!, limit akan di riset setiap harinya!',
}
//Kalo Ngasih Limit Jangan Dikit Lah Bng
global.limitawal = {
    premium: "Infinity",
    free: 20
}
global.thumb = fs.readFileSync('./lib/xavi.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
