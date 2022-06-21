import { html, render } from "./../../node_modules/lit-html/lit-html.js";
//import {  getAuthor } from "../news-feed/news-feed.js";
import { getAll } from "../../services/postService.js"



function allposts () {
    getAll()
    .then (posts => {
        let postContainerElement = document.getElementsByClassName("post-container")[0];
        let divContainerElement = divContainerTemplate(posts);
        let noRegpostelement = document.getElementsByClassName('no-posts')[0];
        noRegpostelement.style.display = "none";
        render(divContainerElement, postContainerElement);
    })
}

let divContainerTemplate = (posts) => html`
    ${posts.map(post => postTemplate(post))}
`

export let newsFeedTemplate = () => html`
<h2>Posts</h2>
<section class="post-container">
    ${allposts()?.length > 0
         ? posts.map(post => postTemplate(post)) 
         : html`<p class="no-posts">There are no posts.</p>`
        }
</section>
`

function imageHandler(post) {
    const imageId = post.image;
    let imgPath;
    if (imageId === "noPicture") {
        imgPath = "../../images/post-icon.png";
        return imgPath;
    } else {
        let data;
        fetch(`http://localhost:3000/upload/${imageId}`)
            .then(response => {
                response.blob()
                    .then(blobResponse => {
                        data = blobResponse;
                        const urlCreator = window.URL || window.webkitURL;
                        const imgBlob = urlCreator.createObjectURL(data);
                        const imgElement = document.getElementsByClassName(post._id)[0];
                        imgElement.setAttribute('src', imgBlob);
                        const nameElement = document.getElementsByClassName("card-name")[0];
                        // here author !!!!
                        //nameElement.textContent = `${post.firstName} ${post.lastName}`;
                    })
            })
            .catch((err) => {
                console.log(err)
            });
    }
}


export let postTemplate = (post) => html`
    <article class="post-card posts">
        <div class="card-img">
            <img class="${post._id}" src="${imageHandler(post)}">
        </div>
        <div>
            <p id="likes-and-comment-icon-conatiner">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-comment"></i>
            </p> 
             <div>Liked by: ....</div>
        </div>
        
        <!-- <p class="card-name">${post.firstName} ${post.lastName}</p>
        <p>${post.email}</p>
        <p>Date of birth: ${post.dateOfBirth}</p> -->
    </article>
`