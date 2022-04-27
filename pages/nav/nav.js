import { render } from "../../node_modules/lit-html/lit-html.js";
import { navTemplate } from "./navTemplate.js";

export function navGetView () {
    let container = document.getElementsByTagName('nav')[0];
    render(navTemplate(), container);
}
