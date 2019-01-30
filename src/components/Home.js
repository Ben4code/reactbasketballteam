import React, { Component } from 'react'
import axios from 'axios';


//Components
import Featured from './Featured';

const URL_HOME = ' http://localhost:3009/home';

export default class Home extends Component {


    state={
        home: ''
    }

    componentDidMount() {

        axios.get(URL_HOME)
        .then(res =>{
            this.setState({
                home: res.data
            })
        })
    }


    render() {
        return (
            <div>
                <Featured slides={this.state.home.slider}/>
            </div>
        )
    }
}
