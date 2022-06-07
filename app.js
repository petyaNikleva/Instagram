import { getHeaderView } from './pages/header/header.js';
import { getAdvertismentView } from './pages/advertisment/advertisment.js';
import { getFooterView } from './pages/footer/footer.js';

import { Router } from './router/router.js';

localStorage.setItem('loggedUser', JSON.stringify({user: 'noUser'}));

const router = new Router();

getHeaderView();
getAdvertismentView();
getFooterView();


