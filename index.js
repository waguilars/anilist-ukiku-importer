import './utils/environment.js'
import backup from './data/following.json' assert { type: "json" }
import { STATUS_PENDING, STATUS_SEEING, STATUS_COMPLETED } from './utils/constants.js';
import * as malSercice from './service/MAL.js';
import { generateCodeChallange } from './utils/security.js';

const seeingAnimes = backup.data.filter(a => a.state == STATUS_SEEING);
const pendingAnimes = backup.data.filter(a => a.state == STATUS_PENDING);
const completedAnimes = backup.data.filter(a => a.state == STATUS_COMPLETED);

const animeName = seeingAnimes[0].title;

const authURL = await malSercice.authorizeMAL();
console.log(`Please authorize My Anime List to continue: ${authURL}`)

// malSercice.findAnimeByName(animeName);