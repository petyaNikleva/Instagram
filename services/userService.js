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

export const login = (email, password) => {
    return fetch(`${baseUrl}/loginUser`, {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json());
}


// TO DO
export async function getLoggedUser() {
    const responce = fetch(`${baseUrl}/isLogged`);
    //const user = await responce.json();
    console.log(responce)
    return responce;
}
        


