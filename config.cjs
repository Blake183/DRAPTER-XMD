// config.cjs
const fs = require("fs");
require("dotenv").config();

const config = {
  // === Session & Command Settings ===
  SESSION_ID: process.env.SESSION_ID || "nector~xpRBwZgJ#lC2jSR10HLhHUobaJSboFqIxyUs_61V8HuRWkvCKIWA",
  PREFIX: process.env.PREFIX || '*',
  MODE: process.env.MODE || "public", // public | private

  // === Bot Identity ===
  BOT_NAME: process.env.BOT_NAME || "DRAPTER-XMD",
  OWNER_NAME: process.env.OWNER_NAME || "ⓃⒺCⓉOR🍯",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254725474072",
  DESCRIPTION: process.env.DESCRIPTION || "© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ⓃⒺCⓉOR🍯",
  MENU_IMAGE: process.env.MENU_IMAGE || "https://files.catbox.moe/mw30hn.jpg",

  // === Auto Features ===
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN === 'false' ? false : true,
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY === 'false' ? false : true,
  AUTO_DL: process.env.AUTO_DL === 'true',
  AUTO_READ: process.env.AUTO_READ === 'true',
  AUTO_TYPING: process.env.AUTO_TYPING === 'true',
  AUTO_RECORDING: process.env.AUTO_RECORDING === 'true',
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === 'true',
  AUTO_REACT: process.env.AUTO_REACT === 'true',
  AUTO_BLOCK: process.env.AUTO_BLOCK === 'false' ? false : true, // default true for 212 numbers
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',

  // === Protection / Behavior Settings ===
  REJECT_CALL: process.env.REJECT_CALL === 'true',
  NOT_ALLOW: process.env.NOT_ALLOW === 'false' ? false : true, // default true

  // === Extra Features / API Keys ===
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc", // Already valid
  WELCOME: process.env.WELCOME === 'true',
};

module.exports = config;
