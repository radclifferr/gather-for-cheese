import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/BlogPost.css"

const BlogPost = (props) => {
    const location = useLocation()
    let index = location.state.postNumber
    let blogPost = props.getBlogPosts[index]
    

    return (
        <div className="blog-post-page-container">
            <h1>{blogPost.postTitle}</h1>
            <img src={blogPost.images[0]} alt="" className="post-header-image"/>
            <img src={blogPost.images[1]} alt="" className="post-secondary-image" />
            <div className="post-long-description">{blogPost.postLongDescription}</div>
            <div className="post-recipe-description">{blogPost.postRecipeDescription}</div>
        </div>
    )
}

export default BlogPost;