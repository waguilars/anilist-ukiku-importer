import { generateCodeChallange } from '../utils/security.js';

const MAL_API_URI = 'https://api.myanimelist.net';
const MAL_AUTH_URI = 'https://myanimelist.net/v1/oauth2/authorize';
const { MAL_CLIENT_ID } = process.env;

export async function authorizeMAL() {
    const params = new URLSearchParams();
    params.append("response_type", "code");
    params.append("client_id", MAL_CLIENT_ID);
    params.append("code_challenge", await generateCodeChallange())
    
    return `${MAL_AUTH_URI}?${params.toString()}`;
}


export async function findAnimeByName(name) {
    
    const params = new URLSearchParams();
    params.append("q", encodeURI(name));
    
    const animeListURI = `${MAL_API_URI}/anime?${params.toString()}`;
    
    const headers = new Headers();
    headers.append("X-MAL-CLIENT-ID", MAL_CLIENT_ID);
    
    const response = await fetch(animeListURI, { headers: headers});
    
    const { data } = await response.json();

    const MALAnime = data.find(anime => anime.node.title == name);

    return MALAnime;
}
