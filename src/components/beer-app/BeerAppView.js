import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './BeerAppView.css'

class BeerAppView extends Component {
    state = {
        beers: []
    };

    componentDidMount() {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(
                res => this.setState({beers: res}),
                err => console.log('Error!', err)
            )
    }

    render() {
        const {beers} = this.state;
        return (
            <>
                <h1>Beer app</h1>
                <div className="beer-wrapper">
                    {beers.map(beer => (
                        <Link to={`/beer-app/${beer.id}`} key={beer.id} className="beer-box">
                            <img src={beer.image_url} alt={beer.name}/>
                            <h2>{beer.name}</h2>
                        </Link>
                    ))}
                </div>
            </>
        )
    }
}


export default BeerAppView;