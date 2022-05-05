import { render } from "../../node_modules/lit-html/lit-html.js";

let navTemplate = {};

const routes = {
    // "/": newsFeedTemplate,
    // "/#register": registerTemplate,
};

export const addNavHtml = (template) => {
    navTemplate = template;
}

export const addToRoute = (uri, template) => {
    routes[uri] = template;
}

window.onhashchange = (e) => {
    const locationHash = e.path[0].location.hash;
    hashChangeHandler(locationHash)
};

export const hashChangeHandler = (locationHash) => {
    const page = `/${locationHash}`;
    let html = routes[page]();
    let navHtml = navTemplate();

    const navContainer = document.getElementsByTagName('nav')[0];
    const mainContainer = document.getElementsByClassName('main-content')[0];

    render(navHtml, navContainer);
    render(html, mainContainer);
}

export const changePage = (page) => {
    if (window.location.hash == page){
        hashChangeHandler(window.location.hash);
    } else {
        window.location.href = `/#${page}`;;
    } 
}







