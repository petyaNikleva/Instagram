import { html } from "./../../node_modules/lit-html/lit-html.js";

export let headerTemplate = () => html`
 <div class="header-container">
                <a href="#">
                    <img src="./images/instagram_letters.png" alt="">
                </a>
                <section class="following-people">
                    <article class="small-card">
                        <img src="/images/nick.jpg" alt="Avatar">
                        <h4 class="name">Nick</h4>
                    </article>
                    <article class="small-card">
                        <img src="/images/klara.jpg" alt="Avatar">
                        <h4 class="name">Klara</h4>
                    </article>
                    <article class="small-card">
                        <img src="/images/maria.jpg" alt="Avatar">
                        <h4 class="name">Maria</h4>
                    </article>
                    <article class="small-card">
                        <img src="/images/anna.jpg" alt="Avatar">
                        <h4 class="name">Anna</h4>
                    </article>
                    <article class="small-card">
                        <img src="/images/elena.jpg" alt="Avatar">
                        <h4 class="name">Elena</h4>
                    </article>
                    <article class="small-card">
                        <img src="/images/john.jpg" alt="Avatar">
                        <h4 class="name">John</h4>
                    </article>
                </section>
            </div>
`