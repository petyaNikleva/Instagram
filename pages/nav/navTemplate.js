import { html } from "../../node_modules/lit-html/lit-html.js";

export let navTemplate = () => html`
    <ul class="nav-list">
                    <li class="nav-item">
                        <a href="./index.html">
                            <img class="logo-img" src="./images/logo.svg.png" alt="logo_img">
                        </a>
                    </li>
                    <li class="nav-item home">
                        <a href="/" onclick="route()">Home</a>
                    </li>
                    <li class="nav-item register">
                        <a href="/register" onclick="route()">Register</a>
                    </li>
                    <li class="nav-item login">
                        <a href="/login" onclick="route()">Login</a>
                    </li>
                    <li class="nav-item user-list">
                        <a href="/user-list" onclick="route()">User List</a>
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
