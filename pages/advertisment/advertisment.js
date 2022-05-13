import { render } from "../../node_modules/lit-html/lit-html.js";
import { advertismentTemplate } from "./advertismentTemplate.js";

export function getAdvertismentView () {
    let container = document.getElementsByClassName('advertisement')[0];
    render(advertismentTemplate(), container);
} 
