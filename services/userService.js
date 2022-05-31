const baseUrl = 'http://localhost:3000';

export const register = ( email, firstName, lastName, dateOfBirth, password, image ) => {
    return fetch(`${baseUrl}/createUser`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, firstName, lastName, dateOfBirth, password, image })
    })
        .then(res => res.json());
}

