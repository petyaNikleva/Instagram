import { navGetView } from './pages/nav/nav.js';
import { getHeaderView } from './pages/header/header.js';
import { getAdvertismentView } from './pages/advertisment/advertisment.js';
import { getFooterView } from './pages/footer/footer.js';


import { addToRoute } from './router/router.js';
import { newsFeedTemplate } from './pages/newsFeed/newsFeedTemplate.js';
import { registerTemplate } from './pages/register/registerTemplate.js';
import { loginTemplate } from './pages/login/loginTemplate.js';

addToRoute('/', newsFeedTemplate);
addToRoute('/#register', registerTemplate);
addToRoute('/#login', loginTemplate)


getHeaderView();
navGetView();
getAdvertismentView();
getFooterView();

