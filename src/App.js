import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from "./components/core/Navbar";
import BlogView from "./components/blog/BlogView";
import ContactFormView from "./components/contact-form/ContactFormView";
import BeerAppView from "./components/beer-app/BeerAppView";
import BlogPostView from "./components/blog/BlogPostView";

function App() {
    return (
        <Router>
            <Navbar/>
            <div className="content-wrapper">
                <Route exact path="/" component={ContactFormView}/>
                <Route exact path="/blog" component={BlogView}/>
                <Route path="/blog/:id" component={BlogPostView}/>
                <Route path="/beer-api" component={BeerAppView}/>
            </div>
        </Router>
    );
}

export default App;
