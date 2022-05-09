import { render } from "../../node_modules/lit-html/lit-html.js";
import { newsFeedTemplate} from "../pages/newsFeed/newsFeedTemplate.js"
import { loginTemplate } from "../pages/login/loginTemplate.js";
import { registerTemplate } from "../pages/register/registerTemplate.js";
import { userListTemplate } from "../pages/user-list/userListTemplate.js";
import { navTemplate } from "../pages/nav/navTemplate.js";

//let navTemplate = {};



export class Router {
    constructor(routes, nav) {
        this.routes = {
            '/': newsFeedTemplate,
            '/#login': loginTemplate,
            '/#register': registerTemplate,
            '/#user-list': userListTemplate
        };
        this.nav = {
            '/': navTemplate,
            '/#login': navTemplate,
            '/#register': navTemplate,
            '/#user-list': navTemplate
        };

        this.hashChangeHandler();
        window.addEventListener('hashchange', this.hashChangeHandler)
    }

    hashChangeHandler() {
        const locationHash = window.location.hash;
        const routes = {
            '/': newsFeedTemplate,
            '/#login': loginTemplate,
            '/#register': registerTemplate,
            '/#user-list': userListTemplate
        };
        const nav = {
            '/': navTemplate,
            '/#login': navTemplate,
            '/#register': navTemplate,
            '/#user-list': navTemplate
        };
        const page = `/${locationHash}`;
        let mainHtml = routes[page]();
        let navHtml = nav[page]();

        const navContainer = document.getElementsByTagName('nav')[0];
        const mainContainer = document.getElementsByClassName('main-content')[0];

        render(navHtml, navContainer);
        render(mainHtml, mainContainer);
    }
}


export const changePage = (page) => {
    if (window.location.hash == page) {
        hashChangeHandler(window.location.hash);
    } else {
        window.location.href = `/#${page}`;;
    }
}







