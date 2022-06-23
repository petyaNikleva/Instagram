import { html, render } from "./../../node_modules/lit-html/lit-html.js";
import { getAll, update } from "../../services/postService.js"
import authService from "../../services/authenticationService.js";

const baseUrl = 'http://localhost:3000'


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

function postViewHandler(post) {
    const imageId = post.image;
    let data;
    fetch(`${baseUrl}/upload/${imageId}`)
        .then(response => {
            response.blob()
                .then(blobResponse => {
                    data = blobResponse;
                    const urlCreator = window.URL || window.webkitURL;
                    const imgBlob = urlCreator.createObjectURL(data);
                    const imgElement = document.getElementsByClassName(post._id)[0];
                    imgElement.setAttribute('src', imgBlob);
                    authorHandler(post._authorId);
                })
         })
        .catch((err) => {
            console.log(err)
        });
    
}


function authorHandler(_authorId) {
     fetch(`${baseUrl}/${_authorId}`)
     .then( res => res.json())
     .then(user => {
        const authorHTMLCollection = document.getElementsByClassName(_authorId);
        let authorElements = [...authorHTMLCollection];
        authorElements.forEach(element => {
            element.textContent = `Author: ${user.firstName} ${user.lastName}`
        } )
    })
    .catch((err) => {
        console.log(err)
    }) 
}   


export let postTemplate = (post) => html`
    <article class="post-card posts">
        <div class="card-img">
            <img class="${post._id}" src="${postViewHandler(post)}">
        </div>
        <div class="description">Description: ${post.description}</div>
        <div class="div-author ${post._authorId}">Author:...</div> 
        <div>
            <p id="likes-and-comment-icon-conatiner">
                <i class="fa-solid fa-heart" @click=${(e) => likeClickHandler(e, post._id)}></i>
                <i class="fa-solid fa-comment"></i>
            </p> 
            <div class="likes-${post._id}">Liked by: ${post.likes.length} people.</div>
        </div>
    </article>
`

function likeClickHandler(e, postId) {
    e.preventDefault();
    fetch(`${baseUrl}/postId/${postId}`)
     .then( res => res.json())
     .then(post => {
        const likers = post.likes;
        const currentUser = authService.getLoggedUser();
        if (currentUser.user === 'noUser') {
            alert('Only logged users can like posts.');
            return;
        } else if (likers.includes(currentUser._id)) {
            alert('You have already liked this post.')
            return;
        } else {
            likers.push(currentUser._id);
            post.likes = likers;
            console.log(post);
            update(postId, post)
            .then((updatedPost) => {
                const likeDiv = document.getElementsByClassName(`likes-${post._id}`)[0];
                (post.likes.length) - 1 == 0
                ?  likeDiv.textContent = `Liked by You`   
                :  likeDiv.textContent = `Liked by You and ${(post.likes.length)-1} people.`
              })
              .catch(err => {
                console.log(err);
              })  
        }  
    })
    .catch((err) => {
        console.log(err)
    }) 
   
}



          