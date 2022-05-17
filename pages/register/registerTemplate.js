import { html } from "./../../node_modules/lit-html/lit-html.js";
import { checkInputValid } from "../../helpers/validations.js";
import { repeatPasswordHandler, registerHandler } from "./register.js";


export let registerTemplate = () => html`
    <header>
        <div class="logo-container">
            <a href="#">
                <img src="../../images/instagram_letters.png" alt="">
            </a>
        </div>
    </header>
    
    <div class="container">
        <form id="form" action="/">
    
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>
    
            <div class="input-control">
                <label for="email">Email</label>
                <input @blur="${(e) => checkInputValid(e.target)}" type="email" placeholder="Enter Email" name="email"
                    id="email" data-validators="required, email-valid, email-exist" />
                <div class="error-container">
                    <span class="error errror-message--required">
                        Email is required.
                    </span>
                    <span class="error errror-message--email-valid">
                        Provide a valid email address.
                    </span>
                    <span class="error errror-message--email-exist">
                        This email has already been registered.
                    </span>
                </div>
            </div>
    
            <div class="input-control">
                <label for="firstName">First Name</label>
                <input @blur="${(e) => checkInputValid(e.target)}" class="form-input" type="text"
                    placeholder="Enter First Name" name="firstName" id="firstName"
                    data-validators="required, min-length(2), max-length(10)" />
                <div class="error-container">
                    <span class="error errror-message--required">
                        Firstname is required.
                    </span>
                    <span class="error errror-message--min-length">
                        Firstname should be at least 2 characters.
                    </span>
                    <span class="error errror-message--max-length">
                        Firstname should be less than 10 characters.
                    </span>
                </div>
            </div>
    
            <div class="input-control">
                <label for="lastName">Last Name</label>
                <input @blur="${(e) => checkInputValid(e.target)}" type="text" placeholder="Enter Last Name" name="lastName"
                    id="lastName" data-validators="required, min-length(2), max-length(10)" />
                <div class="error-container">
                    <span class="error errror-message--required">
                        Lastname is required.
                    </span>
                    <span class="error errror-message--min-length">
                        Lastname should be at least 2 characters.
                    </span>
                    <span class="error errror-message--max-length">
                        Lastname should be less than 10 characters.
                    </span>
                </div>
            </div>
            <div class="input-control">
                <label for="dateOfBirth">Date of birth</label>
                <input @blur="${(e) => checkInputValid(e.target)}" type="text" placeholder="Enter date of birth dd mm"
                    name="dateOfBirth" id="dateOfBirth" data-validators="required" />
                <div class="error-container">
                    <span class="error errror-message--required">
                        Date of birth is required.
                    </span>
                </div>
            </div>
    
            <div class="input-control">
                <label for="password">Password</label>
                <input @blur="${(e) => checkInputValid(e.target)}" type="password" placeholder="Enter Password"
                    name="password" id="password"
                    data-validators="required, min-length(8), digit, upper-case-letter, lower-case-letter" />
                <div class="error-container">
                    <span class="error errror-message--required">
                        Password is required.
                    </span>
                    <span class="error errror-message--min-length">
                        Password must be at least 8 character.
                    </span>
                    <span class="error errror-message--digit">
                        Password shoud contain at least one digit.
                    </span>
                    <span class="error errror-message--upper-case-letter">
                        Password shoud contain at least one upper case letter.
                    </span>
                    <span class="error errror-message--lower-case-letter">
                        Password shoud contain at least one lower case letter.
                    </span>
                </div>
            </div>
    
            <div class="input-control">
                <label for="repeat-password">Repeat Password</label>
                <input @blur="${repeatPasswordHandler}" type="password" placeholder="Repeat Password" name="repeat-password"
                    id="repeat-password" data-validators="required" />
                <div class="error-container">
                    <span class="error errror-message--required">
                        Repeat password.
                    </span>
                    <span class="error errror-message--passwords-dont-match">
                        Passwords don't match.
                    </span>
                </div>
            </div>

            
            <div class="input-control upload-img-container">
                <label for="upload-img">Upload profile image*</label>
                <input type="button" value="Upload image" name="upload-img"
                    id="upload-img"/>
              
            </div>

            <hr>
    
            <button @click=${registerHandler} class="register-btn">Register</button>
    
            <div class="container signin">
                <p>Already have an account? <a href="/#login">Sign in</a>.</p>
                <p>*not required field</p>
            </div>
        </form>
    </div>  
`

