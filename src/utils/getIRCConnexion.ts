export function getIRCConnexion() {


console.log("**************getIRCConnexion()**************");

    const IrcClient = require('irc-framework').Client;

    const oauthToken = 'r8qdu1nlfcd0jqgdq2yhyp31pdkiu0';
    const username = 'Aurelia777777';
    const channel = '#Tonton';
    // const oauthToken = 'VOTRE_TOKEN_OAUTH';
    // const username = 'VOTRE_NOM_UTILISATEUR_TWITCH';
    // const channel = '#VOTRE_CANAL_TWITCH';

    const client = new IrcClient();

console.log("**************",client,"**************");

    client.connect({
        host: 'irc.chat.twitch.tv',
        port: 6667,
        nick: username,
        username: username,
        password: `oauth:${oauthToken}`,
    });

    client.on('registered', () => {
        console.log('Connecté au serveur IRC de Twitch');

        // Joindre le canal
        client.join(channel);
    });

    client.on('message', (event: any) => {
        console.log(`[${event.channel}] ${event.nick}: ${event.message}`);
    });

}

