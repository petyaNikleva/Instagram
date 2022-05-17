import { html } from "./../../node_modules/lit-html/lit-html.js";

import { profileServerConnection } from "./user-profile.js";

export let userProfileTemplate = () => html`
   <form id="form" method="POST" action="http://localhost:3000/upload" enctype="multipart/form-data">
        <input type="file" name="image">
        <button @click=${profileServerConnection}>Test</button>
        <input type="submit">
    </form>`