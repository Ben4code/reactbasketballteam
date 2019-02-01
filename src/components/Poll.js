import React, { Component } from 'react'
import axios from 'axios';

export default class Poll extends Component {

    URL_POLL = 'http://localhost:3004/teams';

    state = { pollTeams: [] }

    componentDidMount() {
        //initialize api request on component mount
        this.getPoll()
    }

    getPoll = () => {
        //initialize api request
        axios.get(`${this.URL_POLL}?poll=true&_sort=count&_order=desc`)
            .then(res => {
                this.setState({ pollTeams: res.data })
            })
    }

    addCount = (count, id) => {
        //Shorter alternative with patch compared to using get/put.
        axios.patch(`${this.URL_POLL}/${id}`, {'count': count + 1})
        .then( () =>{
            this.getPoll();
        })
    }

    renderPoll = () => {
        //Render data in state.
        const position = ['1st', '2nd', '3rd'];
        return this.state.pollTeams.map((item, index) => {
            return (
                <div key={item.id} className="pollItem" onClick={() => this.addCount(item.count, item.id)}>
                    <img src={`/images/teams/${item.logo}`} alt={item.name} />
                    <h3>{position[index]}</h3>
                    <div>Votes: {item.count}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="homePoll">
                <h3>Who will be the next champion?</h3>
                <div className="pollContainer">
                    {this.renderPoll()}
                </div>
            </div>
        )
    }
}
