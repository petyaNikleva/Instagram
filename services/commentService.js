import { baseUrl } from "../helpers/constants.js";

// export const getAll = async () => {
//     let res = await fetch(`${baseUrl}/posts`)
//     let jsonResult = await res.json();
//     if (res.ok) {
//         return jsonResult;
//     } else {
//         throw new Error('Error');
//     }      
// }

export const create = async ( text, _authorId ) => {
    let res = await fetch(`${baseUrl}/createComment`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({  
            "text": text, 
            "_authorId": _authorId
        })
    })
    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw new Error('Error');
    }      
}

// export const update = (postId, postData ) => {
//     return fetch(`${baseUrl}/postId/${postId}`, {
//         method: "PUT",
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({ ...postData })
//     })
//         .then(res => res.json());
// }



