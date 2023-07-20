// redirects to the discord authorization page with the appropriate scopes selected

import { DISCORD_CLIENT_ID, DISCORD_REDIRECT } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const scope = url.searchParams.get('scope')

    throw redirect(307, `https://discord.com/oauth2/authorize?response_type=code&client_id=${DISCORD_CLIENT_ID}&prompt=consent&scope=${scope}&redirect_uri=${DISCORD_REDIRECT}`)
}