// export const addProject = (credential, token) => {
//     return fetch('/safe/add/credential', {
//         method: 'post',
//         body: JSON.stringify(credential),
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     })
// }


export const getProjects = () => {
    return fetch('/projects/authenticate', {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
}

export const attemptLogin = (credential) => {
    return fetch('/user/authenticate', {
        method: 'post',
        body: JSON.stringify(credential),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}