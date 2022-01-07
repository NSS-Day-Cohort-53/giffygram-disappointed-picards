import { getPosts } from "../data/provider.js"
import { getUsers } from "../data/provider.js"

export const Posts = () => {
    const posts = getPosts()
    const users = getUsers()

    let html = `
    <ul>
    ${posts.map(
        (post) => {
            const foundUser = users.find(user => user.id === post.userId)
                return `<ul>
                       <img src="${post.imgURL}">
                       <div> User Name - ${foundUser.name} </div>
                       <div> Title - ${post.title} </div>
                       <div> Description - ${post.description} </div>
                       <div> Date - ${post.timestamp} </div>
                   </ul>`
            }
        ).join(" ")}
        </ul>
    `
    return html;
}
