import React, { Component } from 'react';
import axios from 'axios';


const URL_TEAM = 'http://localhost:3004/teams';

export default class Team extends Component {
  
  state ={
    data: []
  }

  componentDidMount(){
    axios.get(`${URL_TEAM}/?name=${this.props.match.params.id}`)
    .then(res =>{
      console.log(res.data)
      this.setState({ data: res.data})
    })
  }
  
  showSquad = (squad) =>{
    return squad.map((item)=>{
      
      return (
        <div className="item" key={item.name}>
          <img src={`/images/avatar.png`} alt={item.name}/>
          <h4>{item.name}</h4>
          <div className="node">
            <span>Number: </span>{item.number}
          </div>
          <div className="node">
            <span>PPG: </span>{item.PPG}
          </div>
          <div className="node">
            <span>APG: </span>{item.APG}
          </div>
          <div className="node">
            <span>RPG: </span>{item.RPG}
          </div>
        </div>
      )
    })
  }

  showData = (state) =>{
    return state.data.map((item)=>{
      return (
        <div key={item.id} className="teamDataWrapper" style={{display: 'flex'}}>
          <div className="left">
            <img src={`/images/teams/${item.logo}`} alt={item.name}/>
          </div>
          <div className="right">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <br/> <hr/> <br/>
            <div className="squad">
              {this.showSquad(item.squad)}
            </div>
          </div>
        </div>
      )
    })
  }
  
  render() {
    return (
      <div>
          {this.showData(this.state)}
      </div>
    )
  }
}
