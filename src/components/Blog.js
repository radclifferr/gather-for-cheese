import React from "react";
import "../styles/Blog.css"
import {Link} from "react-router-dom";
import blogPostObject from "./blogPostObject"

const Blog = () => {
    return (
        <div className="blog-page-container">
            <h1>Blog Posts</h1>
            <div className="blog-post-container">
                {blogPostObject.map((post, index) => {
                    return (
                        <div className="post-container" key={index}>
                            <div className="post-title">{post.postTitle}</div>
                            <Link to={`/Blog/${post.postTitle}`} state={{postNumber: index}}><img src={post.images[0]} alt="" /></Link>
                            <Link to={`/Blog/${post.postTitle}`} state={{postNumber: index}}><button className="general-button">See Details</button></Link>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Blog;