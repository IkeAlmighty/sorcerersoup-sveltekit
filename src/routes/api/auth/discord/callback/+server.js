// After being redirected from https://discordapp.com/api/oauth2/authorize
// (with the appropriate scopes provided) the second step of the authorization
// process is to be redirected here where we will request
// an authorization token from POST https://discordapp.com/api/oauth2/token.

import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, DISCORD_REDIRECT } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, cookies }) {
    const code = url.searchParams.get('code'); // the auth code sent by discord.

    // send auth code to the discord token endpoint so that we can retrieve an access token.

    const params = new URLSearchParams();
    params.append('client_id', DISCORD_CLIENT_ID);
    params.append('client_secret', DISCORD_CLIENT_SECRET);
    params.append('redirect_uri', DISCORD_REDIRECT);
    params.append('code', code);
    params.append('grant_type', 'authorization_code');

    const res = await fetch(`https://discordapp.com/api/oauth2/token`,
        {
            method: 'POST',
            "Content-Type": 'application/x-www-form-urlencoded',
            body: params
        }
    );

    // once the response is recieved, create a session and store it as a cookie.

    // first grab the access token and refresh token
    const credentials = await res.json();

    // hit up the user endpoint (@me) for user information
    const userResponse = await fetch('https://discord.com/api/oauth2/@me', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${credentials.access_token}`,
        }
    })

    // create user to store in session cookie
    const user = await userResponse.json();

    // create session json
    const session = { user: user.user }

    // set the session and credentials cookies as http-only
    // cookies:

    cookies.set('session', JSON.stringify(session), { httpOnly: true, path: '/', sameSite: 'lax' });
    cookies.set('credentials', JSON.stringify(credentials), { httpOnly: true, path: '/', sameSite: 'lax' })

    // redirect to user profile:
    throw redirect(307, '/');
}