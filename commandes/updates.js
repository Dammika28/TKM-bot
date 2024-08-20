"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "joelinc", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello 👋\n\nClick The link below to Join ⬡┃𝙹𝚘𝚎𝚕 𝚒𝚗𝚌┃⬡ WhatsApp channel\n\n';
    let d = 'https://whatsapp.com/channel/0029Vade9VgD38CPEnxfYF0M';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/2283bb75d6ffaa4affa52.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");

zokou({ nomCom: "channel", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello 👋\n\nClick The link below to Join ⬡┃joel md┃⬡ WhatsApp Channel\n\n';
    let d = 'https://whatsapp.com/channel/0029Vade9VgD38CPEnxfYF0M';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/2283bb75d6ffaa4affa52.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *Zokou* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Djalega++*'
      let varmess=z+d
      var img='https://wallpapercave.com/uwp/uwp3842939.jpeg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */
