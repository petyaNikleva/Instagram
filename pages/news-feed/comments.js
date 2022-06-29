import authService from "../../services/authenticationService.js";
import { create } from "../../services/commentService.js";
import { update } from "../../services/postService.js"


export function commentClickToggle (e, postId) {
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

export function addCommentHandler(e, post) {
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
