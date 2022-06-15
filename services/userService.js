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

export const register = async ( email, firstName, lastName, dateOfBirth, password, image ) => {
    let res = await fetch(`${baseUrl}/createUser`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, firstName, lastName, dateOfBirth, password, image })
    })
    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw new Error('Error');
    }
        
}

// export const register = ( email, firstName, lastName, dateOfBirth, password, image ) => {
//     return fetch(`${baseUrl}/createUser`, {
//         method: "POST",
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({ email, firstName, lastName, dateOfBirth, password, image })
//     })
//         .then(res => {
//             console.log(res)
//             res.json()});
// }

export const update = (userId, currentUserData ) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ ...currentUserData })
    })
        .then(res => res.json());
}

// TO DO from here
export const uploadImage = async (userId, imgId, userData) => {
    userData.image = imgId;
    //let userData = await fetch(`${baseUrl}/${userId}`);
    //let jsonRes = userData.json();
    //jsonRes.image = imgId;
   
    return fetch(`${baseUrl}/${userId}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ ...userData })
    })
        .then(res => res.json());
}



export const deleteById = async (userId) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: "DELETE",
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








        


