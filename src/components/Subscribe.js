import React, { Component } from 'react';
import axios from 'axios';

export default class Subscribe extends Component {
    state = {
        email: '',
        error: false,
        success: false
    }

    getInput = (e) => {
        this.setState({ email: e.target.value })
    }

    submitInput = (e) => {
        const URL_EMAIL = 'http://localhost:3004/subcriptions'
        e.preventDefault();
        const email = this.state.email.trim();
        let regex = /\S+@\S+\.\S+/;
        //let regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
        if (regex.test(email)) {
            axios.post(URL_EMAIL, { email: email })
                .then(res => {
                    console.log(res.data)
                    this.setState({ email: '', success: true, error: false })
                })
        } else {
            this.setState({ error: true, success: false })
        }
    }

    render() {
        return (
            <div className="subParent">

                <div className="subscribe">
                    <h3>Subscribe to us.</h3>
                    <div>
                        <form onSubmit={this.submitInput}>
                            <input
                                placeholder="youremail@email.com"
                                value={this.state.email}
                                onChange={this.getInput.bind(this)}
                                type="text" />
                        </form>
                        {this.state.error ? <p style={{ color: 'red', textAlign: 'center' }}>Please check your mail.</p> : null}
                        {this.state.success ? <p style={{ color: 'green', textAlign: 'center' }}>Thank you for subscribing.</p> : null}
                    </div>

                    <small>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, laudantium? Mollitia ipsa autem eos laudantium repudiandae in eligendi dignissimos delectus, quo facilis animi, corporis iste atque nemo repellendus, voluptate cum?
                </small>
                </div>
            </div>
        )
    }
}
