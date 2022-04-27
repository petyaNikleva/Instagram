import { render } from "../../node_modules/lit-html/lit-html.js";
import { headerTemplate } from "./headerTemplate.js";

let container = document.getElementById('header')

render(headerTemplate(), container);