const baseUrl = 'http://localhost:3000';

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