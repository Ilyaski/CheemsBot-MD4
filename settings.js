//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['212693219828'] //ur owner number
global.ownername = "𝐈 𝐋 𝐘 𝐀 𝐒  𝐊 𝐈  🌩️" //ur owner name
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "Morocco, Béni Mellal, Khénifra" //ur location

//bot bomdy 
global.owner = ['212693219828']
global.ownertag = '212693219828' //ur tag number
global.botname = '𝐬𝐚𝐲𝐥𝐞𝐫' //ur bot name
global.linkz = "https://youtu.be/WiIqCdiDjFo" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtu.be/WiIqCdiDjFo" //ur website to be displayed
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD4' //script link
global.reactmoji = "🌚" //ur menu react emoji
global.themeemoji = "🦄" //ur theme emoji
global.packname = "𝐈 𝐋 𝐘 𝐀 𝐒  𝐊 𝐈 👨🏻‍💼 " //ur sticker watermark packname
global.author = "𝐈 𝐋 𝐘 𝐀 𝐒  𝐊 𝐈 🌚" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['212693219828'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🌚','🙊','🙈']
global.sp = '⭔'
global.mess = {
    success: 'تم ✓',
    admin: 'هاد الامر ديال الأدمين!',
    botAdmin: 'طلعني أدمين أبعدا!',
    owner: 'هاد الامر ديال مول لبوت !',
    group: 'هاد الامر كايتستعمل غير فالكروبات!',
    private: 'Features Used Only For Private Chat!',
    bot: 'هاد الامر ماكايخصكش',
    wait: 'وخا صبر شويو ...',
    linkm: 'تااا في ناهوا ليان؟؟',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'راك تبانيتي من المالك ديالي، إلى بغيتي يتحيد ليك البان تواصل معاه.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'لقد تم حضر البوت من المجموعة ، تواصل مع المالك لفك الحضر'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://i.pinimg.com/736x/3f/6f/3a/3f6f3ad28fbc8492737d5f3ea908fec2.jpg'
global.fluming = 'https://d3h48bfc4uelnv.cloudfront.net/public-imgs/social-media-post-13da7a10-7a51-4a1f-8a0b-358aa5a593ac.jpg'
global.flarun = 'https://i.pinimg.com/736x/08/3b/78/083b7899f3a22e6a74b01763304da20b.jpg'
global.flasmurf = 't=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
