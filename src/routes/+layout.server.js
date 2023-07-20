import { redirect } from "@sveltejs/kit";
import { BASIC_USER_AUTH_URL } from "$lib/constants";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {

    // check to see if a session has been stored locally:
    const session = cookies.get('session');

    if (!session) throw redirect(307, BASIC_USER_AUTH_URL);

    return { user: session }
}