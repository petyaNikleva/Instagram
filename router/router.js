import { render } from "../../node_modules/lit-html/lit-html.js";
import { newsFeedTemplate} from "../pages/newsFeed/newsFeedTemplate.js"
import { loginTemplate } from "../pages/login/loginTemplate.js";
import {registerTemplate} from "../pages/register/registerTemplate.js";

//let navTemplate = {};

export class Router {
    constructor() {
        this.routes = {};
        this.navTemplate = {};
        this.addToRoute('/', newsFeedTemplate);
        this.addToRoute('/#login', loginTemplate);
        this.addToRoute('/#register', registerTemplate);

        this.addNavHtml(this.navTemplate);

        this.hashChangeHandler();
        window.addEventListener('hashchange', this.hashChangeHandler)
    }

    addToRoute(url, template) {
        this.routes[url] = template;
    }

    addNavHtml(template) {
        this.navTemplate = template;
    }

    hashChangeHandler() {
        const locationHash = window.location.hash;
        //const locationHash = e.path[0].location.hash;
        const page = `/${locationHash}`;
        let mainHtml = this.routes[page]();
        let navHtml = this.navTemplate;

        const navContainer = document.getElementsByTagName('nav')[0];
        const mainContainer = document.getElementsByClassName('main-content')[0];

        render(navHtml, navContainer);
        render(mainHtml, mainContainer);
    }
}

// export const addNavHtml = (template) => {
//     navTemplate = template;
// }

// export const addToRoute = (url, template) => {
//     routes[url] = template;
// }

// window.addEventListener('hashchange', (e) => {
//     //const locationHash = e.path[0].location.hash;
//     hashChangeHandler(e)
// });

// export const hashChangeHandler = (e) => {
//     const locationHash = e.path[0].location.hash;
//     const page = `/${locationHash}`;
//     let mainHtml = routes[page]();
//     let navHtml = navTemplate();

//     const navContainer = document.getElementsByTagName('nav')[0];
//     const mainContainer = document.getElementsByClassName('main-content')[0];

//     render(navHtml, navContainer);
//     render(mainHtml, mainContainer);
// }

export const changePage = (page) => {
    if (window.location.hash == page) {
        hashChangeHandler(window.location.hash);
    } else {
        window.location.href = `/#${page}`;;
    }
}







