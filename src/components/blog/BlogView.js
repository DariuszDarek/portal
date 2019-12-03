import React from 'react';
import BlogCard from "./BlogCard";
import articles from '../../articles';

function BlogView() {
    return (
        <>
            <h1>Blog</h1>
            <section style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {
                    articles.map(article =>
                        <BlogCard post={article} key={article.id}/>
                    )
                }
            </section>
        </>
    );
}

export default BlogView;