const baseUrl = 'http://localhost:3000';

export const create = async ( _authorId, description, fileName ) => {
    let res = await fetch(`${baseUrl}/createPost`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ 
            "_author":_authorId, 
            "description":description, 
            "image":fileName})
    })
    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw new Error('Error');
    }
        
}