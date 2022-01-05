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
            (user) => {
                applicationState.users = user
            }
        )
}

export const getUsers = () => {
    return applicationState.users.map(user => ({ ...user }))
}

export const login = (userLogin) => {
    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLogin)
    }
    return fetch(`${API}/users`, fetchOptions)
        .then(response => response.json())
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}


export const fetchPosts = () => {
    return fetch(`${API}/posts`)
        .then(response => response.json())
        .then(
            (posts) => {
                applicationState.posts = posts
            }
        )
}

export const getPosts = () => {
    return applicationState.posts.map((post) => ({ ...post }))
}

export const fetchLikes = () => {
    return fetch(`${API}/likes`)
        .then(response => response.json)
        .then(
            (likes) => {
                applicationState.likes = likes
            }
        )
}
export const getLikes = () => {
    return applicationState.likes.map((like) => ({ ...like }))
}
export const fetchFollows = () => {
    return fetch(`${API}/follows`)
        .then(response => response.json)
        .then(
            (follows) => {
                applicationState.follows = follows
            }
        )
}
export const getFollows = () => {
    return applicationState.follows.map((follow) => ({ ...follow }))
}
export const fetchMessages = () => {
    return fetch(`${API}/messages`)
        .then(response => response.json)
        .then(
            (messages) => {
                applicationState.messages = messages
            }
        )
}
export const getMessages = () => {
    return applicationState.messages.map((message) => ({ ...message }))
}



