import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { baseUrl } from "../../helpers/constants.js";
import { dateModifier } from "../../helpers/dateModifier.js";

import authService from "../../services/authenticationService.js";
import { createComment, updateComment } from "../../services/commentService.js";
import { update } from "../../services/postService.js"


export function addCommentHandler(e, post) {
    e.preventDefault();
    const textElement = document.getElementById(`addComment-${post._id}`);
    const text = textElement.value;
    const userId = (authService.getLoggedUser())._id;
    if (alertIfNotLoggedUser() || text === '') {
        return;
    }
   
    createComment(text, userId)
        .then((comment) => {
            const commentId = comment._id;
            post.comments.push(commentId);
            update(post._id, post)
                .then(updatedPost => {
                    textElement.value = '';
                })
            commentClickToggle(e, post._id, post);
            commentClickToggle(e, post._id, post);
            window.location.href = "/#";

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
    <div class="date-reply">
        <span>${dateModifier(comment.date)} </span>
        <span>${checkReplyExist(comment)}<span>
                <span class="reply reply-span-${comment._id}" @click=${(e) => replyClickHandler(e, comment, comment._id)}>
                    Reply </span>
    </div>
    
    <div style="display:none" class="input-add-reply reply-${comment._id}">
    <input type="text" id="addReply-${comment._id}" name="addReply-c" placeholder="Reply">
        <div style="display:inline" class="arrow-up"></div>
        <button class="btn-post" @click=${(e) => addReplayHandler(comment)}>Add reply</button>
    </div>
        <div style="display:none" class="reply-show replay-${comment._id}" > 
                <div style="display:none" class="arrow-up reply-${comment._id}"></div>
        </div>
`


function replyClickHandler(e, comment) {
    const replyContainerElement = document.getElementsByClassName(`reply-${comment._id}`)[0];
    replyContainerElement.style.display === "flex"
        ? replyContainerElement.style.display = "none"
        : replyContainerElement.style.display = "flex"
}




function addReplayHandler(comment) {
    const replyInputElement = document.getElementById(`addReply-${comment._id}`);
    const text = replyInputElement.value;
    if (alertIfNotLoggedUser() || (!text) ) {
        return;
    }
    const userId = (authService.getLoggedUser())._id;
    createComment(text, userId)
        .then((createdReply) => {
            const replyContainerElement = document.getElementsByClassName(`reply-span-${comment._id}`)[0];
            replyContainerElement.style.display = "none";
            const newId = createdReply._id;
            comment.reply = newId;  
            const commId = comment._id;
            updateComment(commId, comment)
                .then(updatedComm => {
                    
                })

        })
        .catch((err) => {
            console.log(err);
        })

}

function checkReplyExist(comment) {
    if (comment.reply) {
        fetch(`${baseUrl}/commentId/${comment.reply}`)
            .then(res => res.json())
            .then(reply => {
                const _authorId = reply._authorId;
                fetch(`${baseUrl}/${_authorId}`)
                    .then(res => res.json())
                    .then(user => {
                        console.log(user);
                        const elementReply = document.getElementsByClassName(`reply-${comment._id}`)[0];
                        elementReply.style.display = "block";
                        elementReply.textContent = ` ${user.firstName} ${user.lastName} replies: ${reply.text}   ⮝`;
                        const replyContainerElement = document.getElementsByClassName(`reply-span-${comment._id}`)[0];
                        replyContainerElement.style.display = "none";
         })
        })
    }
}









function alertIfNotLoggedUser() {
    const currentUser = authService.getLoggedUser();
    if (currentUser.user === 'noUser') {
        alert('Only logged users can add comments.');
        return false;
    }

}

