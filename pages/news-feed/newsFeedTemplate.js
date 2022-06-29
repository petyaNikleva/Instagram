import { html, render } from "./../../node_modules/lit-html/lit-html.js";
import { getAll } from "../../services/postService.js"
import { postViewHandler, likersCountHandler, likeClickHandler } from "./news-feed.js";
import authService from "../../services/authenticationService.js";
import { create } from "../../services/commentService.js";
import { update } from "../../services/postService.js"

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
            
            <div class="show-comment-container"  @click=${(e) => commentClickToggle(e, post._id)} >
                <i class="fa-solid fa-comment"></i>
                <div class="show-${post._id}">Show comments</div>
            </div>


            <div class="comments-container comments-container-${post._id}">
                <div class="show-comments-${post._id}">....comments. here</div>
                <div class="input-add-comment">
                    <input  type="text" id="addComment-${post._id}" name="addComment-${post._id}" placeholder="Your comment">
                    <button class="btn-post" @click=${(e) => addCommentHandler(e, post)}>Add comment</button>
                </div>
               
            </div>
        </div>
    </article>
`

function commentClickToggle (e, postId) {
    e.preventDefault();
    const commentElement = document.getElementsByClassName(`comments-container-${postId}`)[0];
    const showCommentTextEleement = document.getElementsByClassName(`show-${postId}`)[0];
    
    if (showCommentTextEleement.textContent === 'Show comments') {
        commentElement.style.display = "block"
        showCommentTextEleement.textContent = 'Hide comments'
    } else if (showCommentTextEleement.textContent === 'Hide comments') {
        commentElement.style.display = "none";
        showCommentTextEleement.textContent = 'Show comments'
    }    
}

function addCommentHandler(e, post) {
    e.preventDefault();
    const text = document.getElementById(`addComment-${post._id}`).value;
    const currentUser = authService.getLoggedUser();
    const userId = currentUser._id;
    if (currentUser.user === 'noUser') {
        alert ('Only logged users can add comments.');
        return;
    }
    create(text, userId)
        .then((comment) => {
            const commentId = comment._id;
            post.comments.push(commentId);
            update(post._id, post)
                .then(data => {
                    console.log(data);
            })
            setTimeout(() => {
                alert('Your comment has been added.')
                window.location.href = "/#";
            }, 500);
        })
        .catch((err) => {
        console.log(err);
    })
}


          