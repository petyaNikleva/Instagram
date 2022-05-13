import { html } from "./../../node_modules/lit-html/lit-html.js";

export let advertismentTemplate = () => html`
     <article class="advertisement-card">
                    <h3>Online Guitar Course</h3>
                    <img src="./images/guitar.jpg" alt="guitar">
                    <p>Try the new guitar classes. Start learning today. Our teacher is the best!</p>
                </article>
                <article class="advertisement-card">
                    <h3>Orange Juice</h3>
                    <img src="./images/juice.jpg" alt="juice">
                    <p>Did you try the new taste of our new incredible orange juice?</p>
                </article>
                <article class="advertisement-card">
                    <h3>Amazing phone</h3>
                    <img src="./images/phone.jpg" alt="phone">
                    <p>The most modern phone with the perfect camera that you must have.</p>
                </article>
`