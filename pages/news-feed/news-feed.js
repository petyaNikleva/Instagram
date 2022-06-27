import { baseUrl } from "../../helpers/constants.js";
import { update } from "../../services/postService.js"
import authService from "../../services/authenticationService.js";



export function postViewHandler(post) {
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

export function likersCountHandler (postId) {
    fetch(`${baseUrl}/postId/${postId}`)
    .then( res => res.json())
    .then(post => {
       const likers = post.likes;
       const currentUser = authService.getLoggedUser();
       const likeDiv = document.getElementsByClassName(`likes-${post._id}`)[0];
       if (likers.includes(currentUser._id) && (post.likes.length) > 0) {
            likeDiv.textContent = `Liked by You and ${(post.likes.length)-1} people.`     
       }  else if (likers.includes(currentUser._id)) {
        likeDiv.textContent = `Liked by You.`
        } else {
            likeDiv.textContent = `Liked by ${(post.likes.length)} people.`
        } 
    })
    .catch(err => {
        console.log(err);
    }) 
}

export function likeClickHandler (e, postId) {
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
        }  
    })
    .catch((err) => {
        console.log(err)
    }) 
}