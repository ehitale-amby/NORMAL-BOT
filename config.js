const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkJyOWlKUWlpWnFibjhlb2x0NjRUL084d3liWG9MUHNJQ1YzZisxNmhGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRqUFhSNXVSZXdOdVUzN1lVUDNzZkFqL1lLRTZhSWozQXl2WFI2TFZsOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SWU0S2o5MDBYWlkvcDgxbUpKcitmd1A0NXVqU0JoczNXdzNGVkdoaG40PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPOEVtNmxPZEZHTlkrR0RiOXBRNzZXakR6aElIV0pmUjRWOTRkS0xQOUNrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVQRWhmbU8yUWV3bUFzbStjWDVSQ0NrRmZYZHBMc3pJb2JRSm0vbmJUbjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB4MFVqcjRWS0VMdXZvWnFyb0ZiWmQyckNLTmdQSXhnU1RwalpWWllGSFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUM1WjZNNXVEamlrQTJPT0tkczI5RGRLTW96MVJLTnNHOUVibzhLOTQyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1B6S0pneE9DOTFKRzVtOFlwZThIZ3ZOOVJHdU9PNEpNczQ3NG1tNncyQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFZUVLUGFwNENPWFdLSUpVSm9DNlcyUFEvRFpaZVBQZHhWZjFCYU9VeEtsMzBpZVg3WVgwWGdiQmRhb2hxNmNLUW9ySkZlWERrbDB2eVY5a291a0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiJJTEFvS3EwbkxHY015MjJ4UXp3ZUFwaUxnNVl1ZTJObzlDQWszQVdlejg0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxcURlUGl6elMtbThCaTZXVUNtTl9nIiwicGhvbmVJZCI6ImM4ZmNjZWIzLWVmMzAtNGJjZS1hNDg5LTQxOTAyY2RmNDM4NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2T3YrQWd1Rzd5a1h1WStIWGYxSnNLNXhDaTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHZmNytpYllrWmlZRHhkZlNaT0dWczJsMEhJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZDU0g0NTlWIiwibWUiOnsiaWQiOiIyMzQ3MDQ1Nzg3ODIzOjE1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNbkovSmdERU5PKzJyd0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjVGlUU3pQYnBvQUd5b29iZzRXZzVLaVA3STdMcXdOVGFUcHQ4V3Q4Q2l3PSIsImFjY291bnRTaWduYXR1cmUiOiJlbnFQMnJjMlRGQUMxcXoyODBLZmJjWHZxSUhEVjNkRHhXVVRiNlJuV21MR1I3a084NS9jMTY5NmZ3NWQ0ZlFHMkRkeDJHa3g4YXhxbGdHZUdDTWdDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaXloTXhNdnNReXJsTjU0c1FPQzlveFhKSFRSUGg4L1NuTkkzOGRpL2l3ZzQzVmc2cHNPc0pPMUY2SjQ2YzAwQ1ZWZ1k1UDB0cGVUOWFqa0NRaXEzQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQ1Nzg3ODIzOjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhFNGswc3oyNmFBQnNxS0c0T0ZvT1Nvait5T3k2c0RVMms2YmZGcmZBb3MifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzc5MjQ0NDh9',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Bryan",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "Bryan",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





