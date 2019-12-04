import React from 'react';
import articles from '../../mockData/articles';
import BlogCard from "./BlogCard";

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