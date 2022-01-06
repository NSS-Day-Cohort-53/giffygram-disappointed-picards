import { getPosts } from "../data/provider.js"

export const Posts = () => {
    const posts = getPosts()
    console.log(posts)

//     let postsList = ""
    
//     if ( posts.length > 0 ) {
//         postsList += `<ul>`
//     const postsArray = posts.map( (post) => {     
              
//     const foundDescription = posts.description.find((description) => description === post.userId)   
    
//     const foundTitle = posts.title.find((title) => title === post.userId)   
    
//     const foundImg = posts.img.find((img) => img === post.userId)   

//     return `
//     <ul post--list-item">
//       post #${post.id} placed on ${new Date(post.timestamp).toLocaleString()},
//     //    ${foundDescription.posts} ${foundTitle.type} 
//     //   ${foundToppings.map((topping) => topping.name).join(" and ")}
//     //   <p>
//     //   description: $${postPrice.toFixed(2)}
//     //   </p> 
//     </ul>
//     <button name="deletepost" id='${post.id}'>Delete post</button>
//     `
// })

// postsList += postsArray.join("")
// postsList += `</ul>`
// }
}
