const { getBuffer } = require("../../lib/myfunc");

module.exports = {
  name: "animequotes",
  alias: ["aniquotes", "quotesanime"],
  desc: "To get a random Anime Quotes pic",
  category: "Weeb",
  usage: `quatoes`,
  react: "🍁",
  start: async (Miku, m, { prefix }) => {
    var Image = await getBuffer(`https://anime-quatoes.onrender.com/`);
    var Button = [
      {
        buttonId: `${prefix}animequotes`,
        buttonText: { displayText: `>>` },
        type: 1,
      },
    ];
    let bmffg = {
      image: Image,
      caption: `Feel My Quotes *${pushName}* Senpai ♥️`,
      footer: `Miku Nakano`,
      buttons: Button,
      headerType: 4,
    };
    await Miku.sendMessage(m.from, bmffg, { quoted: m }).catch((err) => {
      return "Error!";
    });
  },
};