require('dotenv').config();


module.exports = {
    token: '',
    clientId: '1291566552667127848',
    guildId: '931010853002686576',
    youtubeApiKey: 'AIzaSyBezP1fGOLFAd_jhkPrqWnZY5WxgTfgM-Y',
    mongoUri: 'mongodb+srv://l0ngstoryshort:C4FhlvKx2214qDrZ2@biscottinocluster.ifmyp.mongodb.net/?retryWrites=true&w=majority&appName=BiscottinoCluster',
    spotify: {
        clientId: '72e7a51a27f44e7297e342f4f28bf3f6',
        clientSecret: 'af3d1bbab7574185835bf7514513340a',
    },
    cookies:{
    "domain": ".youtube.com",
    "expirationDate": 1762604459.343727,
    "hostOnly": false,
    "httpOnly": false,
    "name": "__Secure-1PAPISID",
    "path": "/",
    "sameSite": "unspecified",
    "secure": true,
    "session": false,
    "storeId": "0",
    "value": "9z0f8mZx6eGSy7ls/AvApr3bk2uEpX4lUb",
    "id": 1
},
    
    distubeOptions: {
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        emitNewSongOnly: true,
        joinNewVoiceChannel: true,
        nsfw: true,
        savePreviousSongs: true,
    }
};
