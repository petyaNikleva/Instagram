import { render } from "../../node_modules/lit-html/lit-html.js";
import { newsFeedTemplate} from "../pages/newsFeed/newsFeedTemplate.js"
import { loginTemplate } from "../pages/login/loginTemplate.js";
import { registerTemplate } from "../pages/register/registerTemplate.js";
import { userListTemplate } from "../pages/user-list/userListTemplate.js";
import { navTemplate } from "../pages/nav/navTemplate.js";

const routes = {
    '/': { 
        mainView : newsFeedTemplate,
        navView : navTemplate
    },
    '/#login': {
        mainView : loginTemplate, 
        navView : navTemplate
    },
    '/#register': {
        mainView : registerTemplate, 
        navView : navTemplate
    },
    '/#user-list': {
        mainView : userListTemplate, 
        navView: navTemplate
    }
};

export class Router {
    constructor() {
        this.hashChangeHandler();
        window.addEventListener('hashchange', this.hashChangeHandler)
    }

    hashChangeHandler() {
        const locationHash = window.location.hash;
       
        const page = `/${locationHash}`;
        let mainHtml = routes[page].mainView();
        let navHtml = routes[page].navView();

        const navContainer = document.getElementsByTagName('nav')[0];
        const mainContainer = document.getElementsByClassName('main-content')[0];

        render(navHtml, navContainer);
        render(mainHtml, mainContainer);
    }
   
}







