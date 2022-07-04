import { baseUrl } from "../helpers/constants.js";

    export const createComment = async (text, _authorId) => {
        let res = await fetch(`${baseUrl}/createComment`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "text": text,
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

export const updateComment = (commId, commentData ) => {
    return fetch(`${baseUrl}/commentId/${commId}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ ...commentData })
    })
        .then(res => res.json());
}


