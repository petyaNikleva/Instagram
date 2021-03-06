import { html, render } from "./../../node_modules/lit-html/lit-html.js";
import { getAll } from "../../services/postService.js"
import { postViewHandler, likersCountHandler, likeClickHandler } from "./news-feed.js";
import { commentClickToggle, addCommentHandler } from "./commentsAndReply.js"




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
<h2>News Feed</h2>
<section class="post-container">
    ${allposts()?.length > 0
         ? posts.map(post => postTemplate(post)) 
         : html`<p class="no-posts">There are no posts.</p>`
        }
</section>
`
 
export let postTemplate = (post) => html`
    <article class="post-card posts">
        <div class="card-img">
            <img class="${post._id}" src="${postViewHandler(post)}">
        </div>
        <div class="description">Description: ${post.description}</div>
        <div class="div-author ${post._authorId}">Author:...</div> 
        <hr>
        <div>
            <div class="like-container">
                <i class="fa-solid fa-heart" @click=${(e) => likeClickHandler(e, post._id)}></i>
                <div class="likes-${post._id}">${likersCountHandler(post._id)}</div>
            </div>
            
            <div class="show-comment-container"  @click=${(e) => commentClickToggle(e, post._id, post)} >
                <i class="fa-solid fa-comment"></i>
                <div class="show-${post._id}">Show comments</div>
            </div>


            <div class="comments-container comments-container-${post._id}">

                <div class="input-add-comment">
                    <input  type="text" id="addComment-${post._id}" name="addComment-${post._id}" placeholder="Your comment">
                    <button class="btn-post" @click=${(e) => addCommentHandler(e, post)}>Add comment</button>
                </div>
                <hr class="grey">

                <div class="show-comments-${post._id}">
                </div> 
            </div>
        </div>
    </article>
`





          