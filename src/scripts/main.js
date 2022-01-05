import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/LoginForm.js"
import { fetchUsers, fetchPosts, fetchMessages, fetchLikes } from "./data/provider.js"

const applicationElement = document.querySelector(".giffygram")

const renderHTML = () => {
    fetchPosts()
        .then(
            fetchUsers
        ).then(
            fetchMessages
        ).then(
            fetchLikes
        ).then(
            () => {
                document.querySelector("#content").innerHTML = GiffyGram()
            }
        )

}
renderHTML()

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))

    if (user) {
        applicationElement.innerHTML = GiffyGram()
    } else {
        applicationElement.innerHTML = LoginForm()
    }
}

renderApp()

document.addEventListener("dbStateChanged", () => renderApp());