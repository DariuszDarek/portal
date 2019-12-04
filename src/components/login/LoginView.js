import React, {Component} from 'react';
import credentials from "../../mockData/credentials";
import Alert from "../shared/Alert";

class LoginView extends Component {
    state = {
        username: '',
        password: '',
        credentialsCorrect: null
    };

    handleChange = e => {
        this.setState({credentialsCorrect: null});
        switch (e.target.id) {
            case 'username':
                this.setState({username: e.target.value});
                break;
            case 'password':
                this.setState({password: e.target.value});
                break;
            default:
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        const {username, password} = this.state;
        this.checkCredentials(username, password);
    };

    checkCredentials = (u, p) => {
        const foundMatch = credentials.find(credential => credential.username === u && credential.password === p);
        foundMatch ? this.setState({credentialsCorrect: true}) : this.setState({credentialsCorrect: false});
    };

    render() {
        const {username, password, credentialsCorrect} = this.state;
        return (
            <div style={{maxWidth: '450px'}}>
                <h1>Login form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="username" value={username} placeholder="Username"
                           onChange={this.handleChange}/>
                    <input type="password" id="password" value={password} placeholder="Password"
                           onChange={this.handleChange}/>
                    <button type="submit">Log in!</button>
                </form>

                {credentialsCorrect && (
                    <Alert status="success">
                        <span>✔</span> You've been logged in successfully!
                    </Alert>
                )}
                {credentialsCorrect === false && (
                    <Alert status="error">
                        <span>✖</span> Please check your username/password
                    </Alert>
                )}
            </div>
        )
    }
}

export default LoginView;