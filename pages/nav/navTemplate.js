import { html } from "../../node_modules/lit-html/lit-html.js";

export let navTemplate = () => html`
    <ul class="nav-list">
                    <li class="nav-item">
                        <a href="./index.html">
                            <img class="logo-img" src="./images/logo.svg.png" alt="logo_img">
                        </a>
                    </li>
                    <li class="nav-item home">
                        <a href="./index.html">Home</a>
                    </li>
                    <li class="nav-item register">
                        <a href="./pages/register/register.html">Register</a>
                    </li>
                    <li class="nav-item login">
                        <a href="./pages/login/login.html">Login</a>
                    </li>
                    <li class="nav-item user-list">
                        <a href="./pages/user-list/user-list.html">User List</a>
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
                        <a href="#">Log Out</a>
                    </li>
                </ul>
`