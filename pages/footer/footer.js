import { render } from "../../node_modules/lit-html/lit-html.js";
import { footerTemplate } from "./footerTemplate.js";

export function getFooterView () {
    let container = document.getElementsByTagName('footer')[0];
    render(footerTemplate(), container)
};