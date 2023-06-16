import db from "$lib/server/database";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
    // check to see if a session has been stored locally:
    const sessionid = cookies.get('sessionid');

    return { user: await db.collection('user-sessions').findOne({ 'sessionid': sessionid }) }
}