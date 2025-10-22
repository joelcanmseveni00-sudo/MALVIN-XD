
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID |starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0YzelZQZkZlS045TEFvQ0ZlUjNEa2pxYlBNMWVESjRnakVzMmY0MHhFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMU4wckN3b0liVC9PZFp5VHIzSmIwclp0ZFpCRWQxS3dMUUxzRzM2THJGMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRjBoNzBCT3JuVXFHM2tGTCtUSENDdnV0K1VYeWJTVmN1UWk0US84djBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTkplMyt2cWlWV3hhU3pTamV5SkxzQ0ZVY2RFK0UvbVlvNjlQUmlORUJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1IVURuYkp1VzJLY1pObGx0M1RDbWtWMDcyeHJnUm02L0orMDRTVUMwRnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InREREtrQXVVc0taQWdmeHJ3RS9vU3BXYmlCN1RTMTcvOEprT0puVHpraGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUk3QVBodktMQkdkdkdmZWFuL1pZSDV0a3Z4TVJFT2Y1Zll6cXI2ZnZHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXBvUG1ibE5ISmhJdWUwK1MvWkNGUzlwZXNqaTRMWjB6T1hKckZ1QWlTUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5Ydkd6WG0zcW8rZDZpL1ZvYkJieGZlOXQ1VlhiU2l4QWtzY293WEZXSGJDckIvcHlsRzU3Q1Y2VXdZQjdlUFhIcjRRRHBDUGZPekl4R1BrVXJhV0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiJlbHJUNktVZm9nbEo2NXNtK1JRS2xlVFVHUzZSaGhucER5UWRjK1crTVNZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTc5MjkxMDg3N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0Y3QzJFOUU1ODZGMTU4MjMwMDEyQzBFODk0RTAwQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxMTQ2NjQwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU3OTI5MTA4NzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM1MTA3ODlCMDFERTY2RjRGMjFDMzE4NDU4NTNFNTAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTE0NjY0MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQU9mQ01KRDZSaVN5Nm5GREotd2k4QSIsInBob25lSWQiOiI1MThiODMzNy05ODU2LTQ5ZDQtOWE3MS1jMGJlNzU5YzI2MTUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkFXTWRZY242bmRveWJEUXVEVHd3dngvaEpZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVZRXVxbkhnUm5UR050QjdaNGhRNzlDak9pOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNUk1BTFZJTiIsIm1lIjp7ImlkIjoiMjU1NzkyOTEwODc3OjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI1NDIxMTY2NDQ3MDE5MToxQGxpZCIsIm5hbWUiOiJKT0tFUiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2FJclBrRkVQM3Q0OGNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicmFzd0VmZUdIZkFIRGVKTGdVY2V6SmkxMW9CWHp6RE9ubm04RXNZTGNHaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZERPaGpQQktwR1B2YVN1L01vZXBhS1RjQmV2V1FWT254TVFGazkzbVI4Q3NKSW95emJIZ2Jid3RQakFpY0Vac2NMeGFTZjNqcWphUnBSaThBYU8rRGc9PSIsImRldmljZVNpZ25hdHVyZSI6ImZLK2doVHppSHhFVzhVMFVZRCtlN09DZ0kwWmh2cWZTSTNyUEIwK251MHZiUzlJZjBDRlRjdnV5OG1KcmNjQjVxWjhUVEx6TVdBVGZBK1RCUXlSNUJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzkyOTEwODc3OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTJyTUJIM2hoM3dCdzNpUzRGSEhzeVl0ZGFBVjg4d3pwNTV2QkxHQzNCcCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxMTQ2NjM1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUk0MCJ9| "malvin~Ev0z0JLL#YpZSkM6DKXsFRenTtKDMx8IJhwDwGtqHvfGXclZl1z0",
// add your Session Id make sure it starts with malvin~
PREFIX: process.env.PREFIX |false| ".",
// add your prifix for bot   
BOT_BOT2525: process.env.BOT_NAME || "BOT2525",
// add bot name here for menu
MODE: process.env.MODE || "Puplick",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 1, /1/ Number of warnings before action

    LINK_ACTION: "kick", /1/ "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qumhu4.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/xshsmk",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴍᴀʟᴠɪɴ xᴅ✦ ғʀᴏᴍ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/XdKing2/MALVIN-XD",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "BOT2525",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "225792910877",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "BOT2525",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ BOT2525*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "263776388689",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.7",

};


