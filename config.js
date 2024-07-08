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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "West Africa";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2349033283937" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349033283937";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_02_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMCxcbiAgICAgICAgNixcbiAgICAgICAgMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDMzLFxuICAgICAgICA5MixcbiAgICAgICAgMTcwLFxuICAgICAgICA5MixcbiAgICAgICAgMjM1LFxuICAgICAgICA5MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDgwLFxuICAgICAgICA3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQwLFxuICAgICAgICA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NixcbiAgICAgICAgNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjExLFxuICAgICAgICA5NSxcbiAgICAgICAgOSxcbiAgICAgICAgODEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNixcbiAgICAgICAgMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg3LFxuICAgICAgICA4MCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDM3LFxuICAgICAgICAzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5LFxuICAgICAgICA5NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0LFxuICAgICAgICA2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5LFxuICAgICAgICA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDkxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhTamgxNEFDSzJONW5sRFRWYlhVSGJsd3E3eGhWQStVNEdpbWlwU1NJL0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImk3dGVLSlVzUmtTUjZ1MVduekg5c2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2E5ZDczNGEtYWUwMi00NjRkLThlYWUtODM0YzEzYjc3ZjllXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExLFxuICAgICAgNzgsXG4gICAgICAyMzQsXG4gICAgICA3NixcbiAgICAgIDc0LFxuICAgICAgNzksXG4gICAgICAxMDQsXG4gICAgICAyMzMsXG4gICAgICAyMjIsXG4gICAgICAzMSxcbiAgICAgIDk3LFxuICAgICAgOTMsXG4gICAgICAxOTIsXG4gICAgICAyNDMsXG4gICAgICAzMixcbiAgICAgIDEyMSxcbiAgICAgIDE4NSxcbiAgICAgIDEzMCxcbiAgICAgIDE5NCxcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICAxMDAsXG4gICAgICAxODMsXG4gICAgICA0OSxcbiAgICAgIDE1NSxcbiAgICAgIDIyNyxcbiAgICAgIDE5MyxcbiAgICAgIDEyNyxcbiAgICAgIDM3LFxuICAgICAgMTI3LFxuICAgICAgMjM3LFxuICAgICAgMTI5LFxuICAgICAgMTc0LFxuICAgICAgMTY4LFxuICAgICAgOTgsXG4gICAgICAxMDksXG4gICAgICAwLFxuICAgICAgMjE3LFxuICAgICAgMjIxLFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkw2M1I3VEJGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDMzMjgzOTM3OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NDMzNzI4Mjk2NTczODozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQK24xdmdHRU1mR3I3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFON0FGeGdISkdnMnUzdVFYTXd3YldzVUtXS3VqWkR1U01YM3dwem56Q009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYUtQbTJMc1JveW9ZT3B1VjN0VWV3VVNDRWJSejI5My9NcU92Z2JQR2NFTlJuTmc5Y25PZ2VnSHFNeFFiSHBXUStObkJpOEJNdHRzRU5rdGFNbldaRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNGllVURtSjNBdXdSbTJEbitlZk1Wdk94MldSVVA4LzA4amRvbSt0a2hhWWtnZWd0YVpBZDZvbEprcDA1a2hIOFdrbkt3MlBvRlBQTUJaZDlsbnZNaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzMzI4MzkzNzozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NDM3MjJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Dr Einstein",
  packname: process.env.PACK_NAME || "Dr Einstein's Pack",
  botname : process.env.BOT_NAME  || "einsteinbot",
  ownername:process.env.OWNER_NAME|| "Dr Einstein",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API  || "false",

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
