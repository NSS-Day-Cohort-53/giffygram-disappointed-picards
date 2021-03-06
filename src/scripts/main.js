import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/LoginForm.js"
import { fetchUsers, fetchPosts } from "./data/provider.js"

const applicationElement = document.querySelector(".giffygram")

fetchPosts().then(() => fetchUsers()).then(() => renderApp())

export const renderApp = () => {

    const user = parseInt(localStorage.getItem("gg_user"))

    if (user) {
        applicationElement.innerHTML = GiffyGram()
    } else {
        applicationElement.innerHTML = LoginForm()
    }
}

// renderApp()

applicationElement.addEventListener("stateChanged", () => renderApp());