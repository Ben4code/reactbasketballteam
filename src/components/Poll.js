import React, { Component } from 'react'


//Data
import Data from '../db.json'


export default class Poll extends Component {
    state = { pollTeams: [] }

    componentDidMount() {
        //initialize api request on component mount
        this.getPoll()
    }

    getPoll = () => {
        
        if(Data.home){
            //Get temas with poll === true
            const getTeams = Data.teams.filter(team =>{
                return team.poll === "true";
            })
            
            //Sort poll teams.
            getTeams.sort(function(a, b){
                return a.count-b.count
            }).reverse();
            this.setState({ pollTeams: getTeams})
        }
    }

    addCount = (count, id) => {
        //Shorter alternative with patch compared to using get/put.
        const statePolls = this.state.pollTeams;

        statePolls.map(pollTeam => {
            return pollTeam.id === id ? pollTeam.count++ : '' ;
        })
        this.setState({pollTeams: statePolls});
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
