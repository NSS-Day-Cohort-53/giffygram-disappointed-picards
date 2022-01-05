import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/LoginForm.js"
import { fetchUsers, fetchPosts, fetchMessages, fetchLikes } from "./data/provider.js"

const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))

    if (user) {
        applicationElement.innerHTML = GiffyGram()
    } else {
        applicationElement.innerHTML = LoginForm()
    }
}

renderApp()

const renderHTML = () => {
    fetchUsers()
        .then(
            fetchPosts
        ).then(
            fetchMessages
        ).then(
            fetchLikes
        ).then(
            () => {
                // document.querySelector(".loginform").innerHTML = LoginForm()
                document.querySelector(".giffygram").innerHTML = GiffyGram()
            }
        )

}
renderHTML()


document.addEventListener("dbStateChanged", () => render());