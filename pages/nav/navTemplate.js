import { html } from "../../node_modules/lit-html/lit-html.js";
import { isLogged, logOutHandler } from "./nav.js";

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
                    ${!isLogged()
                    ? html`
                     <li class="nav-item register">
                        <a href="/#register">Register</a>
                    </li>
                    <li class="nav-item login">
                        <a href="/#login">Login</a>
                    </li>
                    `
                    : html `
                    <li class="nav-item user-profile">
                        <a href="/#create-post">Create Post</a>
                    </li>
                    <li class="nav-item user-profile">
                        <a href="/#user-profile">My Profile</a>
                    </li>
                    <li class="nav-item user-list">
                        <a href="/#user-list">User List</a>
                    </li>
                    <li class="nav-item logout">
                        <a href="#" @click=${logOutHandler} >Log Out</a>
                    </li>
                    `
                    }          
    </ul>
`
