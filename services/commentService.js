import { baseUrl } from "../helpers/constants.js";

export const create = async (text, _authorId, commentId) => {
        let res = await fetch(`${baseUrl}/createComment`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "text": text,
                "_authorId": _authorId,
                "replyTo": commentId
            })
        })
        let jsonResult = await res.json();
        if (res.ok) {
            return jsonResult;
        } else {
            throw new Error('Error');
        }

}




