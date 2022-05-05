import { html } from "./../../node_modules/lit-html/lit-html.js";
import { loginHandler } from "./login.js";


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
                <input type="email" placeholder="Enter Email" name="email" id="email"
                data-validators="required">
                <div class="error-container">
                    <span class="error errror-message--required">
                        Email is required.
                    </span>
                </div>
            </div>

            <div class="input-control">
                <label for="password">Password</label>
                <input type="password" placeholder="Enter Password" name="password" id="password"
                data-validators="required"/>
                <div class="error-container">
                    <span class="error errror-message--required">
                        Password is required.
                    </span>
                    <span class="error errror-message--passwords-dont-match">
                        Incorrect email or password.
                    </span>
                </div>
            </div>
            <hr>

            <button @click=${loginHandler} class="loginbtn">Log In</button>

        <div class="container signin">
            <p>Don't have an account? <a href="/#register">Sign up</a>.</p>
        </div>
        </form>
    </div>
`