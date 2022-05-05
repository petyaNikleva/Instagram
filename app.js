import { navTemplate } from './pages/nav/navTemplate.js';
import { getHeaderView } from './pages/header/header.js';
import { getAdvertismentView } from './pages/advertisment/advertisment.js';
import { getFooterView } from './pages/footer/footer.js';


import { addNavHtml, addToRoute, hashChangeHandler } from './router/router.js';
import { newsFeedTemplate } from './pages/newsFeed/newsFeedTemplate.js';
import { registerTemplate } from './pages/register/registerTemplate.js';
import { loginTemplate } from './pages/login/loginTemplate.js';
import { userListTemplate } from './pages/user-list/userListTemplate.js';

addToRoute('/', newsFeedTemplate);
addToRoute('/#register', registerTemplate);
addToRoute('/#login', loginTemplate);
addToRoute('/#user-list', userListTemplate);

addNavHtml(navTemplate); 


getHeaderView();
getAdvertismentView();
getFooterView();

hashChangeHandler(window.location.hash);
