module.exports.config = {
  name: "autoreact",
  version: "3.0",
  hasPermission: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "Auto React System",
  commandCategory: "No Prefix",
  usages: "[]",
  cooldowns: 0,
};

module.exports.handleEvent = function ({ api, event }) {

  if (!event.body) return;

  const msg = event.body.toLowerCase();

  /* ❤️ Name Words */
  const nameWords = [
  "ratul","hasan","ziniya","zinea","xinea","sahadat","mohem","tahiya",
  "vaiya","vai","mama","মামা","রাতুল","হাসান","জিনিয়া","সুলতানা",
  "তাহিয়া","শাহাদাত","মহিম","ভাইয়া"
  ];

  /* ☪️ Islamic Words */
  const islamicWords = [

  "assalamualaikum","assalamualikum","assalamu alaikum",
  "আসসালামু আলাইকুম","সালাম","salam",

  "walaikumassalam","ওয়ালাইকুম আসসালাম",

  "alhamdulillah","আলহামদুলিল্লাহ",
  "mashallah","মাশাআল্লাহ",
  "subhanallah","সুবহানাল্লাহ",
  "astagfirullah","আস্তাগফিরুল্লাহ",
  "inshallah","ইনশাআল্লাহ",
  "jazakallah","জাযাকাল্লাহ",
  "alhamdulillah for everything",

  "allah","আল্লাহ",
  "allah hafez","allah hafeez",
  "আল্লাহ হাফেজ","আল্লাহ হাফেয",

  "namaz","নামাজ",
  "dua","দোয়া",
  "amin","আমিন",
  "ramadan","রমজান",
  "roja","রোজা",
  "iftar","ইফতার",
  "sehri","সেহরি",

  "eid mubarak","ঈদ মোবারক",
  "jumma mubarak","জুম্মা মোবারক",

  "la ilaha illallah",
  "muhammad rasulullah"
  ];

  /* 👋 Bye Words */
  const byeWords = [
  "bye","bai","bye bye","good night","gn","tata",
  "বাই","টা টা","বিদায়",
  "আল্লাহ হাফেজ","allah hafez"
  ];

  /* Islamic Emoji */
  const islamicEmoji = [
  "☪️","🕌","🤲","📿","🕋","🌙","✨","🤍","🕊️","🪶","🌌"
  ];

  /* Love Emoji */
  const loveEmoji = [
  "❤️","💖","💘","💕","💞","💓","💗"
  ];

  /* Bye Emoji */
  const byeEmoji = [
  "👋","🙂","😌","✨","🤍","🌙"
  ];

  if (nameWords.some(word => msg.includes(word))) {
    const emoji = loveEmoji[Math.floor(Math.random() * loveEmoji.length)];
    api.setMessageReaction(emoji, event.messageID, () => {}, true);
  }

  if (islamicWords.some(word => msg.includes(word))) {
    const emoji = islamicEmoji[Math.floor(Math.random() * islamicEmoji.length)];
    api.setMessageReaction(emoji, event.messageID, () => {}, true);
  }

  if (byeWords.some(word => msg.includes(word))) {
    const emoji = byeEmoji[Math.floor(Math.random() * byeEmoji.length)];
    api.setMessageReaction(emoji, event.messageID, () => {}, true);
  }
};

module.exports.run = function () {};
