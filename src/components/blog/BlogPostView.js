import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './BlogPostView.css';
import articles from '../../mockData/articles'

class BlogPostView extends Component {
    state = {
        article: null
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        const article = articles.find(article => article.id === +id);
        this.setState({article});
    }

    render() {
        const {article} = this.state;
        return (
            <>
                <Link to="/blog">« Back to blog</Link>
                {article && (
                    <section>
                        <h1>{article.title}</h1>
                        Author: <a className="author" href={article.authorUrl} target="_blank">{article.author}</a>
                        <img src={article.imageUrl} alt={article.title}/>
                        <p>{article.content}</p>
                    </section>
                )}
            </>
        );
    }
}

export default BlogPostView;