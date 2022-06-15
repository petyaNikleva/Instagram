import { html } from "./../../node_modules/lit-html/lit-html.js";
import { checkInputValid } from "../../helpers/validations.js";
import { userForEdit, updateHandler } from "./edit.js";


export let editTemplate = () => html`
<header>
    <div class="logo-container">
        <a href="#">
            <img src="../../images/instagram_letters.png" alt="">
        </a>
    </div>
</header>

<div class="container">
    <form id="form" action="/">

        <h1>Edit</h1>
        <hr>
        <div class="input-control">
            <label for="email">Email</label>
            <input @blur="${(e) => checkInputValid(e.target)}" type="email" placeholder="Email" value="${userForEdit().email}" name="email"
            readonly="readonly" id="email" data-validators="required, email-valid" />
            <div class="error-container">
                <span class="error errror-message--required">
                    Email is required.
                </span>
                <span class="error errror-message--email-valid">
                    Provide a valid email address.
                </span>
            </div>
        </div>

        <div class="input-control">
            <label for="firstName">First name</label>
            <input @blur="${(e) => checkInputValid(e.target)}" class="form-input" type="text"
                placeholder="Enter First Name" value="${userForEdit().firstName}" name="firstName" id="firstName"
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
            <label for="lastName">Last name</label>
            <input @blur="${(e) => checkInputValid(e.target)}" type="text" placeholder="Enter Last Name" value="${userForEdit().lastName}" name="lastName"
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
            <input @blur="${(e) => checkInputValid(e.target)}" type="text" placeholder="Enter date of birth dd mm" value="${userForEdit().dateOfBirth}"
                name="dateOfBirth" id="dateOfBirth" data-validators="required" />
            <div class="error-container">
                <span class="error errror-message--required">
                    Date of birth is required.
                </span>
            </div>
        </div>

        <div class="input-control">
            <label for="password">Password</label>
            <input type="password" placeholder="Enter Password" value="${userForEdit().password}" readonly="readonly"
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

        <div style="display:none" class="input-control">
            <label for="img-name">Image name</label>
            <input type="text" value="${userForEdit().image}"
                name="img-name" id="img-name" />
        </div>


        <hr>

        <button @click=${(e) => updateHandler(e, userForEdit()._id)} class="register-btn">Update</button>

    </form>
</div>  
`