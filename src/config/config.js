require('dotenv').config();


module.exports = {
    token: '',
    clientId: '1273230302822797312',
    guildId: '1106591466651922502',
    youtubeApiKey: 'AIzaSyBVWMQz4MItLxGPkqdcH6hHlC5TIv_dHk0',
    mongoUri: 'mongodb+srv://l0ngstoryshort:C4FhlvKx2214qDrZ2@biscottinocluster.ifmyp.mongodb.net/?retryWrites=true&w=majority&appName=BiscottinoCluster',
    spotify: {
        clientId: '72e7a51a27f44e7297e342f4f28bf3f6',
        clientSecret: 'af3d1bbab7574185835bf7514513340a',
    },
    cookies:{
        domain: ".youtube.com",
        expirationDate: 1757764090.235338,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-1PAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "0",
        value: "1WEHRrYUBttCn9ih/ACbOwdBzceu9lwe-x",
        id: 1
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
