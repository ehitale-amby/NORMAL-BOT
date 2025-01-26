const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW3OqOhj9L3mt3XIT0JnOHFAUVAQveOmZ/RAhQCoQCEGFjv/9DLWd9uHsnh6eMglZ38pa6/teQUZwiWaoBoNXkFN8hgy1S1bnCAyAXoUhoqADAsggGIClJR3WF/9AA34yvz7H2W5fzMTTIir6o4OeNSwfCfMrrCoxegK3DsirY4L9bwDPobI2A8+Qua0nqbq2Y4G1jJzAXI1hMrlaV2UVhVDo1yJ5ArcWEWKKs8jIY5QiCpMZql2I6c/on2xeW0y2RZdAuN3HUsGFjUxd9Vhfrpkse67CLXLHgHvT/xn9Qnlu9v2XdJOYB017rvcbLqUG1Bfn5YxTnfJF0HYXTRN6mXWnX+IoQ4EVoIxhVv9Yd86lhVXL1B3m/X6zWKrRSlmk/cpK5RmXFPupc9lnY/G8OBk/I360mv16myjdZmFcYBVPrHGTdtdoVSSa4Hk4sx7gkC7H59r+StylH1k5/R/dlxoyGiysLR5NhQW+no6c1IwqsX82SD+IqwDiOtja3Qf+h7HJu/kJJktCvfUi1ro5DIbP0pwfyVtdmczDwGRwdFZUf4S1T/qQVfQ7lg/EPzBjZr68SNh3kepkF8Fab8cvOokaq4iWaR92V6sJtKt9bTYihivukB/NpWkUhwsvlbnJp3tfRU1sJs++vhuNtVh7envRCdVWAAb8rQMoinDJKGSYZO2ewEsdAIPzGvkUsTd5gWnlYpezpMbVD8/8/hg1anBqVurOcpoqdRdGP3FXPVvqLU5PoANySnxUligwcckIrW1UljBCJRj8/bsDMnRld+PaciLfASGmJfOyKk8IDD5c/TiEvk+qjK3rzB+2C0TBgPvcRozhLCpbHasMUj/GZzSMISvBIIRJiW4dEKAz9lGLB5KlTq/xPF7FO/W4ze3aHK3EZUs5Jtn9l5ALkIB48ZFXZOVRglB6VGUoPaJjgHheEWUZBaAD8HvPtHf+aGHZnIWZO1IJ7eFwORGbgF6Tc94QrXyz4a49oigAA0Yr1AFH6J+qfENOKPsGV1xZ4V61RRURmVrOSSIRm545F0fkC+7dUzB4/ZxTQxK0ePZUUufqQQcdkL5FELcvF0RJ4aSeoiqqIA54+a/y16VVEub5rwyxFvhd9fZKgBjESQkGYGhn0+40GhlOZgj0MplodqQNIw18uvQR93uc/A3erBv3mBNtUhNyjKRd1JthV7GUeXFZbOAmZ+qOqUN8efoXEDAA3rSu53I3t2xF49D8ZEbchJiesta8zOpi3pxKI3VVyDpGJSy8cCrFh3TUF4tM1GdDr9etXT9xcxTK/uW5f7GZ5ah69NRWu6flazGGiJIkW+FgT6WMHR5iqQw868I5cAmHs2O6Z76x8qyas86IdycTZzgOnMOQbUnXmToF71RNb69n9li6RrG6XU0zQXxZ3hvxbRAk7wMYv7XI63u2Qoze5lkGW4/+052vOedunS8g7yPyD1nS94Z04spGkKGml8VsIjlj4qzJy0Pt1HI58oSTfAzHNNRICW633x2QJ5CFhKZgAGAWUILbfkhgybTPVt3gFJUMpjkY8Iqo9IWeIPY7IK21PF8zyD46HGjt5zYluP0DX4VnXP0HAAA='https://files.catbox.moe/h2ydge.jpg',
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





