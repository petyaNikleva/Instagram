import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { baseUrl } from "../../helpers/constants.js";
import { dateModifier } from "../../helpers/dateModifier.js";

import authService from "../../services/authenticationService.js";
import { create } from "../../services/commentService.js";
import { update } from "../../services/postService.js"


export function addCommentHandler(e, post) {
    e.preventDefault();
    const textElement = document.getElementById(`addComment-${post._id}`);
    const text = textElement.value;
    const currentUser = authService.getLoggedUser();
    const userId = currentUser._id;
    if (currentUser.user === 'noUser') {
        alert('Only logged users can add comments.');
        return;
    }
    create(text, userId)
        .then((comment) => {
            const commentId = comment._id;
            post.comments.push(commentId);
            update(post._id, post)
                .then(updatedPost => {
                    textElement.value = '';
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

export function commentClickToggle(e, postId, post) {
    e.preventDefault();
    const commentElement = document.getElementsByClassName(`comments-container-${postId}`)[0];
    const showCommentTextEleement = document.getElementsByClassName(`show-${postId}`)[0];

    if (showCommentTextEleement.textContent === 'Show comments') {
        commentElement.style.display = "block"
        showCommentTextEleement.textContent = 'Hide comments';
        getComments(postId, post)
    } else if (showCommentTextEleement.textContent === 'Hide comments') {
        commentElement.style.display = "none";
        showCommentTextEleement.textContent = 'Show comments'
    }
}


function getComments(postId, post) {
    let commentsElement = document.getElementsByClassName(`show-comments-${postId}`)[0];
    const renderArr = [];
    const commentsIds = post.comments;
    commentsIds.forEach(commentId => {
        fetch(`${baseUrl}/commentId/${commentId}`)
            .then(res => res.json())
            .then(comment => {
                const _authorId = comment._authorId;
                fetch(`${baseUrl}/${_authorId}`)
                    .then(res => res.json())
                    .then(user => {
                        let testElement = commentTemplate(comment, user);
                        renderArr.push(testElement);
                        render(renderArr, commentsElement)
                    })
            })

            .catch((err) => {
                console.log(err)
            })
    });
}

let commentTemplate = (comment, user) => html`
    <div class="single-comment">
        <div><b>${user.firstName} ${user.lastName}:</b> ${comment.text}</div>
    </div>
    <div class="date">${dateModifier(comment.date)} <span class="reply" @click=${(e) => replyClickHandler(e, comment, comment._id)}> Reply </span> </div>
    <div style="display:none" class="input-add-reply reply-${comment._id}">
                <input  type="text" id="addReply-${comment._id}" name="addReply-${comment._id}" placeholder="Reply">
                <button class="btn-post" @click=${(e) => addReplayHandler(e)}>Add reply</button>
    </div>
`
function replyClickHandler (e, comment) {
    const replyContainerElement = document.getElementsByClassName(`reply-${comment._id}`)[0];
    replyContainerElement.style.display === "flex"
    ? replyContainerElement.style.display = "none"
    : replyContainerElement.style.display = "flex"

}



function addReplayHandler (e) {
    
}

