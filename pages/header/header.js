import { render } from "../../node_modules/lit-html/lit-html.js";
import { headerTemplate } from "./headerTemplate.js";

export function getHeaderView () {
    let container = document.getElementById('header')
    render(headerTemplate(), container)
};