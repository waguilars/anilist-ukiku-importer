import * as crypto from 'crypto';

export async function generateCodeChallange() {

    const token = crypto.randomBytes(64)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
        
    return token.slice(0, 128);
}