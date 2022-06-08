const baseUrl = 'http://localhost:3000';

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


export const getAll = async () => {
    let res = await fetch(`${baseUrl}/users`)
    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw new Error('Error');
    }      
}

export const getById = async (userId) => {
    let res = await fetch(`${baseUrl}/:${userId}`);
    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw new Error('Error');
    }      
}

// export const deleteById = async (userId) => {
//     ret fetch(`${baseUrl}/:${userId}`);
//     let jsonResult = await res.json();
//     if (res.ok) {
//         return jsonResult;
//     } else {
//         throw new Error('Error');
//     }      
// }

export const deleteById = async (userId) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: "DELETE",
        // headers: {
        //     'content-type': 'application/json'
        // },
        //body: JSON.stringify({ email, firstName, lastName, dateOfBirth, password, image })
    })
        .then(res => res.json());
}


        


