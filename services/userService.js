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

export const login = async (email, password) => {
    let res = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    let jsonResult = await res.json();
    
    if (res.ok) {
        return jsonResult;
    } else {
        throw new Error('Error');
    }
};



export const getAll = () => {
    fetch(`${baseUrl}/users`)
    .then(res => res.json())      
}

// export const login = (email, password) => {
//     return fetch(`${baseUrl}/loginUser`, {
//         method: "POST",
//         headers: {
//             'content-type': "application/json"
//         },
//         body: JSON.stringify({ email, password })
//     })
//     .then(res => res.json());
// }



        


