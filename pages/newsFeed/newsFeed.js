import { render } from "../../node_modules/lit-html/lit-html.js";
import { newsFeedTemplate } from "./newsFeedTemplate.js";

let container = document.getElementsByClassName('main-content')[0];

render(newsFeedTemplate(), container);