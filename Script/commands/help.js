module.exports.config = {
  name: "help",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "CYBER BOT TEAM",
  description: "Show command list",
  commandCategory: "system",
  usages: "[command name]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 20
  }
};

module.exports.languages = {
  "en": {
    "moduleInfo": `╭──────•◈•──────╮
│      𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁
│●𝗡𝗮𝗺𝗲: %1
│●𝗨𝘀𝗮𝗴𝗲: %3
│●𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: %2
│●𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆: %4
│●𝗖𝗼𝗼𝗹𝗱𝗼𝘄𝗻: %5s
│●𝗣𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻: %6
│𝗢𝗪𝗡𝗘𝗥 : Mehedi Hasan
╰──────•◈•──────╯`,
    "user": "User",
    "adminGroup": "Admin group",
    "adminBot": "Admin bot"
  }
};

module.exports.run = async function ({ api, event, args, getText }) {

  const axios = require("axios");
  const fs = require("fs-extra");
  const request = require("request");

  const { commands } = global.client;
  const { threadID, messageID } = event;

  const command = commands.get((args[0] || "").toLowerCase());

  const prefix = global.config.PREFIX;

  const img = [
"https://i.ibb.co/cSsPSBhG/image0.jpg",
"https://i.ibb.co/DH1hxKsV/image0.jpg",
"https://i.ibb.co/bGZp5tx/image0.jpg",
"https://i.ibb.co/nXRfjZk/image0.jpg",
"https://i.ibb.co/prP1cn1Q/image0.jpg",
"https://i.ibb.co/Ldcb6H8V/image0.jpg"
  ];

  if (!command) {

    const arrayInfo = [];
    const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 15;

    for (var [name] of commands) {
      arrayInfo.push(name);
    }

    arrayInfo.sort();

    const first = numberOfOnePage * page - numberOfOnePage;

    const helpView = arrayInfo.slice(first, first + numberOfOnePage);

    let msg = "";

    for (let cmds of helpView) {
      msg += `•—» [ ${cmds} ] «—•\n`;
    }

    const text = `
╭──────•◈•──────╮
│ Use ${prefix}help [command]
│ Owner : Mehedi Hasan
│ Total Commands : ${arrayInfo.length}
│ Page : ${page}/${Math.ceil(arrayInfo.length / numberOfOnePage)}
╰──────•◈•──────╯`;

    const randomIMG = img[Math.floor(Math.random() * img.length)];

    const path = __dirname + "/cache/help.jpg";

    const callback = () =>
      api.sendMessage(
        { body: msg + text, attachment: fs.createReadStream(path) },
        threadID,
        () => fs.unlinkSync(path),
        messageID
      );

    return request(encodeURI(randomIMG))
      .pipe(fs.createWriteStream(path))
      .on("close", callback);
  }

  const info = getText(
    "moduleInfo",
    command.config.name,
    command.config.description,
    `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`,
    command.config.commandCategory,
    command.config.cooldowns,
    (command.config.hasPermssion == 0)
      ? getText("user")
      : (command.config.hasPermssion == 1)
      ? getText("adminGroup")
      : getText("adminBot")
  );

  const randomIMG = img[Math.floor(Math.random() * img.length)];

  const path = __dirname + "/cache/help.jpg";

  const callback = () =>
    api.sendMessage(
      { body: info, attachment: fs.createReadStream(path) },
      threadID,
      () => fs.unlinkSync(path),
      messageID
    );

  return request(encodeURI(randomIMG))
    .pipe(fs.createWriteStream(path))
    .on("close", callback);
};
