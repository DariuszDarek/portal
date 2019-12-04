import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from "./components/core/Navbar";
import BlogView from "./components/blog/BlogView";
import ContactFormView from "./components/contact-form/ContactFormView";
import BeerAppView from "./components/beer-app/BeerAppView";
import BlogPostView from "./components/blog/BlogPostView";
import SingleBeerView from "./components/beer-app/SingleBeerView";
import LoginView from "./components/login/LoginView";
import TodoView from "./components/todo/TodoView";

function App() {
    return (
        <Router>
            <Navbar/>
            <div className="content-wrapper">
                <Route path="/" exact component={ContactFormView}/>
                <Route path="/blog" exact component={BlogView}/>
                <Route path="/blog/:id" component={BlogPostView}/>
                <Route path="/beer-app" exact component={BeerAppView}/>
                <Route path="/beer-app/:id" component={SingleBeerView}/>
                <Route path="/login" component={LoginView}/>
                <Route path="/todo" component={TodoView}/>
            </div>
        </Router>
    );
}

export default App;
