const baseUrl = 'http://localhost:3000';

export const getAll = async () => {
    let res = await fetch(`${baseUrl}/posts`)
    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw new Error('Error');
    }      
}

export const create = async ( description, image, _authorId ) => {
    let res = await fetch(`${baseUrl}/createPost`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({  
            description, 
            image,
            "_authorId": _authorId,
        })
    })
    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw new Error('Error');
    }      
}

export const update = (postId, postData ) => {
    return fetch(`${baseUrl}/${postId}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ ...postData })
    })
        .then(res => res.json());
}



