const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349121247704";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_34_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE1LFxuICAgICAgICAzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk2LFxuICAgICAgICA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTExLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDQyLFxuICAgICAgICA0LFxuICAgICAgICAxODksXG4gICAgICAgIDMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDU4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAxLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYyLFxuICAgICAgICA1NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDU2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzksXG4gICAgICAgIDMxLFxuICAgICAgICA0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMixcbiAgICAgICAgMjE4LFxuICAgICAgICA4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc4LFxuICAgICAgICA0LFxuICAgICAgICAzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU1LFxuICAgICAgICA2OCxcbiAgICAgICAgODksXG4gICAgICAgIDkxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyNHRBcDJQR0hGbS8wVExIdTJ4WjNDRnBEVjhTeWwrQWZHU1NiRWFtOVlFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJma2NlaHNsaVJwdXZSZzB6cTRxanJBXCIsXG4gIFwicGhvbmVJZFwiOiBcImRmOTE0ZTY2LTM3NzEtNDI1Yy05ZGYxLWMxMWNiMWRmODIwN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAxNDMsXG4gICAgICAxOCxcbiAgICAgIDI0OSxcbiAgICAgIDIyNSxcbiAgICAgIDE1LFxuICAgICAgMjcsXG4gICAgICAxNDAsXG4gICAgICAxNDAsXG4gICAgICAyMDcsXG4gICAgICAxMzUsXG4gICAgICAxOTksXG4gICAgICAxMjAsXG4gICAgICA0NyxcbiAgICAgIDQzLFxuICAgICAgNTMsXG4gICAgICAxNjYsXG4gICAgICA0NCxcbiAgICAgIDU3LFxuICAgICAgMTgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDE0MSxcbiAgICAgIDM0LFxuICAgICAgMjI4LFxuICAgICAgMTc0LFxuICAgICAgMjMxLFxuICAgICAgNDYsXG4gICAgICA2MyxcbiAgICAgIDQ5LFxuICAgICAgMTY1LFxuICAgICAgMTQ4LFxuICAgICAgNjYsXG4gICAgICAxMTEsXG4gICAgICAxNTUsXG4gICAgICAyNDIsXG4gICAgICA0MixcbiAgICAgIDc5LFxuICAgICAgMjIxLFxuICAgICAgODEsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRk5KTUdHSDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjEyNDc3MDQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA5ODQ0MDE1NDgwOTk4OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2ZybktFREVKVG1tYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJa1dnSUdFNzZXZXY1WXNFaDAySVQ5VHpLbUFnMzdVUVYvc2RaMmxZdlRNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpsNldPeUpPTnVnNlY5MjBCdnNJdnl4M0J1eFhhcW5VcXduVmZDUVhpUWVoWXl5SXdHc0gzTGJCYXcvbGh0dVBxdmwvaWlTSTcrZVpYcmdNT1hNR0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitGM2pYTVNsQ0t3dmZTU1VlNE5YQnUwcmQ0L0t3WktxQlFCdldmS0hjbDEvS3lJUEd6REVTR24rZDR5NERJM1RUYlZ3VUpoMDFyZ1dzYWJNeERyZWhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjEyNDc3MDQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxODQ0NzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOc1RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5zVC5qc29uIjogIntcImtleURhdGFcIjpcIi85elgxZnJJamxTUE5oek5zRG5KbXpCQ1oyS1N3aG1wV05qN1l6c2RuNVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODc0OTg0OTMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxOTQyNDAwOTY0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
