const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
 name: "info",
 version: "2.0",
 hasPermssion: 0,
 credits: "Shaon Ahmed + Edit",
 description: "Bot Owner Info",
 commandCategory: "For users",
 usages: "",
 cooldowns: 5
};

module.exports.run = async function ({ api, event, Threads }) {

 const { threadID } = event;
 const { configPath } = global.client;
 delete require.cache[require.resolve(configPath)];
 const config = require(configPath);

 const PREFIX = config.PREFIX;
 const namebot = config.BOTNAME;
 const { commands } = global.client;

 const threadSetting = (await Threads.getData(String(threadID))).data || {};
 const prefix = threadSetting.PREFIX || global.config.PREFIX;

 const dateNow = Date.now();
 const uptime = process.uptime();

 const hours = Math.floor(uptime / (60 * 60));
 const minutes = Math.floor((uptime % (60 * 60)) / 60);
 const seconds = Math.floor(uptime % 60);

 const links = [
 "https://i.ibb.co/cSsPSBhG/image0.jpg",
 "https://i.ibb.co/DH1hxKsV/image0.jpg",
 "https://i.ibb.co/bGZp5tx/image0.jpg",
 "https://i.ibb.co/nXRfjZk/image0.jpg",
 "https://i.ibb.co/prP1cn1Q/image0.jpg",
 "https://i.ibb.co/Ldcb6H8V/image0.jpg"
 ];

 const img = links[Math.floor(Math.random() * links.length)];
 const path = __dirname + "/cache/info.jpg";

 const callback = () => api.sendMessage({
 body: `🍀━━━〔 ${namebot} 〕━━━🍀

🤖 𝗥𝗢𝗕𝗢𝗧 𝗦𝗬𝗦𝗧𝗘𝗠

➤ Prefix System : ${PREFIX}
➤ Prefix Group : ${prefix}
➤ Total Modules : ${commands.size}
➤ Ping : ${Date.now() - dateNow}ms

━━━━━━━━━━━━━━━

👑 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢

➤ Name : 𝗠𝗲𝗵𝗲𝗱𝗶 𝗛𝗮𝘀𝗮𝗻
➤ Facebook : Inbox koro
➤ Whatapp : Bow dile Marbe Dibo Na 😒

━━━━━━━━━━━━━━━

⏰ Bot Active Time
${hours}h ${minutes}m ${seconds}s

━━━━━━━━━━━━━━━

👥 Total Users : ${global.data.allUserID.length}
👥 Total Groups : ${global.data.allThreadID.length}

⚠️ 𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️`,
 attachment: fs.createReadStream(path)
}, threadID, () => fs.unlinkSync(path));

 request(encodeURI(img))
 .pipe(fs.createWriteStream(path))
 .on("close", callback);
};
