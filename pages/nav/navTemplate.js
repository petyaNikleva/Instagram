import { html } from "../../node_modules/lit-html/lit-html.js";
import { logOutHandler } from "./nav.js";

export let navTemplate = () => html`
    <ul class="nav-list">
                    <li class="nav-item">
                        <a href="/#">
                            <img class="logo-img" src="./images/logo.svg.png" alt="logo_img">
                        </a>
                    </li>
                    <li class="nav-item home">
                        <a href="/#">Home</a>
                    </li>
                    <li class="nav-item register">
                        <a href="/#register">Register</a>
                    </li>
                    <li class="nav-item login">
                        <a href="/#login">Login</a>
                    </li>
                    <li class="nav-item user-list">
                        <a href="/#user-list">User List</a>
                    </li>
                    <li class="nav-item">
                        <a href="#">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a href="#">Posts</a>
                    </li>
                    <li class="nav-item">
                        <a href="#">Following</a>
                    </li>
                    <li class="nav-item logout">
                        <a href="#" @click=${logOutHandler}>Log Out</a>
                    </li>
                </ul>
`
