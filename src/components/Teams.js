import React, { Component } from 'react'
import { Spring } from 'react-spring'
import { Link } from 'react-router-dom';

//Data
import Data from '../db.json'


export default class Teams extends Component {

    URL_TEAMS = 'http://localhost:3004/teams';

    componentDidMount() {
        this.setState({
            teams: Data.teams,
            filtered: Data.teams
        })
    }

    state = {
        teams: [],
        filtered: [],
        keyword: '',
        showTemas: true
    }

    showTeams = ({ filtered }) => {
        return filtered.map((item) => {
            return (
                <Link to={`/team/${item.name}`} key={item.id} className="teamItem">
                    <img src={`/images/teams/${item.logo}`} alt={item.name} />
                </Link>
            )
        })
    }

    searchTerm = (event) =>{
        const keyword = event.target.value;
        if(keyword !== ''){
            const list = this.state.teams.filter((item)=>{
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            })
            this.setState({
                filtered: list,
                keyword: keyword
            })
        }else{
            this.setState({
                filtered: this.state.teams,
                keyword: keyword
            })
        }

    }

    render() {
        return (
            <div className="teamsComponent">
                <div className="teamsInput">
                    <input 
                        type="text" 
                        placeholder="Search for a team." 
                        value={this.state.keyword}
                        onChange={e => this.searchTerm(e)}
                    />
                </div>
                <div className="teamsContainer">
                    <Spring
                        from={{ opacity: 0, marginTop: -500 }}
                        to={{ opacity: 1, marginTop: 0 }}
                        config={{ delay: 400, duration: 200 }}
                    >
                        {(props) => {
                            return (
                                <div style={props}>
                                    {this.showTeams(this.state)}
                                </div>
                            )
                        }}
                    </Spring>
                </div>
            </div>
        )
    }
}

