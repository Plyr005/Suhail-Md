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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/cbfd6f96467d7d5d60e6f.mp4" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "18295094433";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/cbfd6f96467d7d5d60e6f.mp4" //  "https://telegra.ph/file/cbfd6f96467d7d5d60e6f.mp4" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_57_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzNixcbiAgICAgICAgMTA2LFxuICAgICAgICA0MixcbiAgICAgICAgMjksXG4gICAgICAgIDk4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgNixcbiAgICAgICAgNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQzLFxuICAgICAgICA5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQyLFxuICAgICAgICA1NixcbiAgICAgICAgMTk3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MixcbiAgICAgICAgNjYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjksXG4gICAgICAgIDI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzksXG4gICAgICAgIDIwLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDM3LFxuICAgICAgICAzMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzksXG4gICAgICAgIDEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpTWRrR1VQMVpqMnFER3ZiV3N6dTQreE5pK21HS1dOWnVpbDZxaGNEYkF3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKemhKSnFVNFRrQ2tVNU5lSWlCTkxnXCIsXG4gIFwicGhvbmVJZFwiOiBcImVlOTk3OWNjLTdkZWItNDQ4Yi1hZmM4LTAwYTA3NzAzMmNlY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDMyLFxuICAgICAgODksXG4gICAgICAxMzcsXG4gICAgICAxMzAsXG4gICAgICA1NyxcbiAgICAgIDIxNixcbiAgICAgIDE3MixcbiAgICAgIDE3MyxcbiAgICAgIDgwLFxuICAgICAgMTkwLFxuICAgICAgMjA2LFxuICAgICAgMTA5LFxuICAgICAgMTExLFxuICAgICAgMTE3LFxuICAgICAgMjIzLFxuICAgICAgMTU3LFxuICAgICAgMTI5LFxuICAgICAgNjAsXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgMTU1LFxuICAgICAgMTYzLFxuICAgICAgMTIxLFxuICAgICAgNDcsXG4gICAgICAxNDAsXG4gICAgICAxMTUsXG4gICAgICAyMDcsXG4gICAgICAxMTIsXG4gICAgICA1NixcbiAgICAgIDE2OSxcbiAgICAgIDEyOSxcbiAgICAgIDE1OSxcbiAgICAgIDEzNixcbiAgICAgIDExMixcbiAgICAgIDE2NyxcbiAgICAgIDQ0LFxuICAgICAgNixcbiAgICAgIDI2LFxuICAgICAgMjU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJLSFRYTDhSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODI5NTA5NDQzMzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGhlX3BsYXllclwiLFxuICAgIFwibGlkXCI6IFwiMzg1MjIwODE4MDg0MTg6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLL0xuczBNRU95Z2piUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIit2NVJUMzhoSzNMRHQvOWtXZklRd3FGTmxHZnJ5R3NzTklrQUo1MWdzVlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNFV2UDJxNVB0RFlHVlo5NjVvdGw1Q1NNcEFGZ1prS3hPZTlsMFNKWmVBalhFVDNYVGRnMmIxQkNpNjVXTEFsOGlrMW91Y3VGY2YrTm9ZZjlzZkRJQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN2hSRk5RN05jRjBBR2JyeFBPMG5aOEYzeHgwVFozb0wxWXREaTcyeGhDOE03VXprNFpRZzZLeFNTOE9UdU04KzV3VElTZ0U1MmFyQ01vRnU2RGJranc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTgyOTUwOTQ0MzM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4ODE4NDBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "God player",


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
  //warncount: process.env.WARN_COUNT || 2,
  //userImages:process.env.USER_IMAGES|| "https://telegra.ph/file/cbfd6f96467d7d5d60e6f.mp4",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "recording", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
