import React from 'react';
import {Link} from "react-router-dom";
import './BlogCard.css'

function BlogCard(props) {
    const {id, title, imageUrl} = props.post;
    return (
        <Link className="blog-card" to={`blog/${id}`}>
            <img src={imageUrl} alt={title}/>
            <h2>{title}</h2>
        </Link>
    );
}

export default BlogCard;