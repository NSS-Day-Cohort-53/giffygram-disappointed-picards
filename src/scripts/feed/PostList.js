import { getPosts } from "../data/provider.js"

export const Posts = () => {
    const posts = getPosts()
    console.log(posts)

}
