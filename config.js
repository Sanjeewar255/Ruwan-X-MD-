const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Sanjeewar255/Ruwan-X-MD-/blob/277deef234c557aff7b5e97591821b86c1ea66e9/Images/IMG-20250828-WA0004.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 DANUWA-MD Is Alive Now🥰*",
BOT_OWNER: '94775646882',  // Replace with the owner's phone number



};
