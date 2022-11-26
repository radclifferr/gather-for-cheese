import React, {useState} from "react";
import "../styles/Blog.css"
import BlogPostOne from "../images/blog-post-one.jpg"

const Blog = () => {
    const [getBlogPosts, setBlogPosts] = useState([
        {
            postTitle: "The Best Baked Brie",
            postHeaderImage: BlogPostOne,
            postShortDescription: "The best brie recipe for parties",
            postLongDescription: "The best brie recipe for parties, you know its true", 
        },
        {
            postTitle: "The Best Baked Brie",
            postHeaderImage: BlogPostOne,
            postShortDescription: "The best brie recipe for parties",
            postLongDescription: "The best brie recipe for parties, you know its true", 
        },
        {
            postTitle: "The Best Baked Brie",
            postHeaderImage: BlogPostOne,
            postShortDescription: "The best brie recipe for parties",
            postLongDescription: "The best brie recipe for parties, you know its true", 
        },
    ])
    return (
        <div className="blog-page-container">
            <h1>Blog Posts</h1>
            <div className="blog-post-container">
                {getBlogPosts.map((post, index) => {
                    return (
                        <div className="post-container">
                            <div className="post-title">{post.postTitle}</div>
                            <img src={post.postHeaderImage} alt="" />
                            <div className="post-short-description">{post.postShortDescription}</div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Blog;