import { render } from "../../node_modules/lit-html/lit-html.js";

const routes = {,
    // "/": newsFeedTemplate,
    // "/#register": "/pages/register/register.html",
    // "/#login": "/pages/login/login.html",
    // "/#user-list": "/pages/user-list/useer-list.html"
};

export const addToRoute = (uri, template) => {
    routes[uri] = template;
}

window.addEventListener('hashchange', function(e) {
    const page = `/${e.path[0].location.hash}`;
    const html = routes[page]();
    const container = document.getElementsByClassName('main-content')[0];
    render(html, container);
}, false);






