import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SingleBeerView extends Component {
    state = {
        beer: null
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`https://api.punkapi.com/v2/beers/${id}`)
            .then(res => res.json())
            .then(
                res => this.setState({beer: res[0]}),
                err => console.log('Error!', err)
            )
    }

    render() {
        if (this.state.beer) {
            const {name, image_url, tagline, description, food_pairing, brewers_tips} = this.state.beer;
            return (
                <>
                    <Link to="/beer-app">« Back to beers list</Link>
                    <img src={image_url} alt={name} style={{float: 'right', maxHeight: '500px'}}/>
                    <h1>{name}</h1>
                    <h2>{tagline}</h2>
                    <p><strong>Description: </strong>{description}</p>
                    <p><strong>Tips: </strong>{brewers_tips}</p>
                    <p><strong>Food pairing:</strong></p>
                    <ul>
                        {food_pairing.map((pairing, i) => (
                            <li key={i}>{pairing}</li>
                        ))}
                    </ul>
                </>
            )
        } else {
            return <h1>Loading...</h1>;
        }

    }
}

export default SingleBeerView;