// resembles the data access module from previous projects 

// const mainContainer = document.querySelector("#container")

const mainContainer = document.querySelector(".giffygram")

const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    }
}

const API = "http://localhost:8088"

export const fetchUsers = () => {
    return fetch(`${API}/users`)
        .then(response => response.json())
        .then(
            (users) => {
                applicationState.users = users
            }
        )
}

export const getUsers = () => {
    return applicationState.chosenUsers.map(users => ({ ...users }))
}