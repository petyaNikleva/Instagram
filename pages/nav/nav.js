import authService  from "../../services/authenticationService.js";
//import { getLoggedUser } from "../../services/userService.js"

export function logOutHandler (e) {
    e.preventDefault();
    authService.logOut();
    window.location.href = "/#reloadPage";
    window.location.href = "/#";
}

export function isLogged () {
    const loggedUser = authService.getLoggedUser();
    if (loggedUser !== "noUser" && loggedUser != null) {
        return true;
    }
    return false;
}

// export async function isLogged () {
//     await getLoggedUser()
//     .then(user => {
//             if (user.isLogged == "Yes") {
//             return true;
//         }
//         return false;
//     }).catch(err => {
//         console.log(err);
//     }) 
// }


// 2 reg view
// dont work - TO DO
// export async function isLogged() {
//     try {
//         let responce =await getLoggedUser()
//         let user = await responce.json();
//         console.log(user)

//         if (user.isLogged === "Yes") {
//             return true;
//         }
//         return false;
        
        
//     } catch (error) {
//         console.log(error)
//     }
// }

// 



