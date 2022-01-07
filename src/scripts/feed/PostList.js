import { getPosts } from "../data/provider.js"
import { getUsers } from "../data/provider.js"

export const Posts = () => {
    const posts = getPosts() 
    const users = getUsers()
    const postAuthor = posts.map(post => {
        return users.find(user => post.userId === user.id)
    })

    let html = `
    <ul>
    ${posts.map(
        (post) => { 
                 `<ul>
                    <img src="${post.imgURL}">
                    <div> User Name - ${post.userId} </div>
                    <div> Title - ${post.title} </div>
                    <div> Description - ${post.description} </div>
                    <div> Date - ${post.timestamp} </div>
                </ul>`
                
                })}
        </ul>
    `
    return html;
}
