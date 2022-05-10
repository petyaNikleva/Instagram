import { getHeaderView } from './pages/header/header.js';
import { getAdvertismentView } from './pages/advertisment/advertisment.js';
import { getFooterView } from './pages/footer/footer.js';

import { Router } from './router/router.js';

const router = new Router();

getHeaderView();
getAdvertismentView();
getFooterView();


