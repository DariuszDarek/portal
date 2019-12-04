import React, {Component} from 'react';
import './ContactFormView.css'
import Alert from "../shared/Alert";

class ContactFormView extends Component {
    state = {
        name: '',
        surname: '',
        msg: '',
        msgSent: null
    };

    handleSubmit = e => {
        e.preventDefault();
        const {name, surname, msg} = this.state;
        if (name && surname && msg) {
            this.setState({msgSent: true, showError: false});
        } else {
            this.setState({msgSent: false, showError: true})
        }
    };

    handleInputChange = e => {
        switch (e.target.id) {
            case 'name':
                this.setState({name: e.target.value});
                break;
            case 'surname':
                this.setState({surname: e.target.value});
                break;
            case 'msg':
                this.setState({msg: e.target.value});
                break;
            default:
        }
        this.setState({msgSent: null, showError: false});
    };

    render() {
        const {name, surname, msg, msgSent} = this.state;
        return (
            <>
                <h1>Contact form</h1>
                <div className="form-wrapper">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="name" placeholder="Name" value={name} onChange={this.handleInputChange}/>
                        <input type="text" id="surname" placeholder="Surname" value={surname}
                               onChange={this.handleInputChange}/>
                        <textarea id="msg" placeholder="Message" rows="10" value={msg}
                                  onChange={this.handleInputChange}/>
                        <button type="submit">Send</button>
                    </form>

                    {msgSent && (
                        <Alert status="success">
                            <span>✔</span> Message successfully sent!
                        </Alert>
                    )}
                    {msgSent === false && (
                        <Alert status="error">
                            <span>✖</span> Please fill all the fields!
                        </Alert>
                    )}
                </div>
            </>
        );
    }
}

export default ContactFormView;