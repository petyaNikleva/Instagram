import { html } from "./../../node_modules/lit-html/lit-html.js";

export let loginTemplate = () => html`
     <header>
        <div class="logo-container">
            <a href="#">
                <img src="../../images/instagram_letters.png" alt="">
            </a>
        </div>
    </header>

    <div class="container">
        <form id="form" action="/">
        
            <h1>Login</h1>

            <div class="input-control">
                <label for="email">Email</label>
                <input type="email" placeholder="Enter Email" name="email" id="email">
                <div class="error"></div>
            </div>

            <div class="input-control">
                <label for="password">Password</label>
                <input type="password" placeholder="Enter Password" name="password" id="password">
                <div class="error"></div>
            </div>
            <hr>

            <button type="submit" class="loginbtn">Log In</button>

        <div class="container signin">
            <p>Don't have an account? <a href="/#register" onclick="route()">Sign up</a>.</p>
        </div>
        </form>
    </div>
`