import React from "react";
import "../styles/Blog.css"
import {Link} from "react-router-dom";

const Blog = (props) => {
    
    return (
        <div className="blog-page-container">
            <h1>Blog Posts</h1>
            <div className="blog-post-container">
                {props.getBlogPosts.map((post, index) => {
                    return (
                        <div className="post-container">
                            <div className="post-title">{post.postTitle}</div>
                            <img src={post.postHeaderImage} alt="" />
                            <div className="post-short-description">{post.postShortDescription}</div>
                            <Link to={`/Blog/${post.postTitle}`} state={{postNumber: index}}><button>See Details</button></Link>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Blog;