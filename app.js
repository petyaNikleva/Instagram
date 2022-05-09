import { navTemplate } from './pages/nav/navTemplate.js';
import { getHeaderView } from './pages/header/header.js';
import { getAdvertismentView } from './pages/advertisment/advertisment.js';
import { getFooterView } from './pages/footer/footer.js';


import { Router } from './router/router.js';
import { newsFeedTemplate } from './pages/newsFeed/newsFeedTemplate.js';
import { registerTemplate } from './pages/register/registerTemplate.js';
import { loginTemplate } from './pages/login/loginTemplate.js';
import { userListTemplate } from './pages/user-list/userListTemplate.js';


const router = new Router();
router.routes['/'];
router.routes['/#register'];
router.routes['/#login'];
router.routes['/#user-list'];

router.nav['/'];
router.nav['/#register'];
router.nav['/#login'];
router.nav['/#user-list'];

getHeaderView();
getAdvertismentView();
getFooterView();


