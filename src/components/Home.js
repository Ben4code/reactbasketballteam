import React, { Component } from 'react'
import axios from 'axios';
import Subscribe from './Subscribe'


//Components
import Featured from './Featured';

const URL_HOME = ' http://localhost:3004/home';

export default class Home extends Component {


    state={
        home: '',
        waiting: true
    }

    componentDidMount() {

        axios.get(URL_HOME)
        .then(res =>{
            this.setState({
                home: res.data,
            })
            setTimeout(()=>{
                this.setState({
                    waiting: false
                })
            }, 800)
        })
    }


    render() {
        if(this.state.waiting){
            const spinner ={
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                height: '85vh',
                postion: 'relative'
            }
            return (
                <div style={spinner}>
                    <img style={{position: 'absolute', left: '42%'}} src="/images/spinner.gif" alt="spinner"/>
                </div>
                )
        }else{
            return (
                <div>
                    <Featured slides={this.state.home.slider}/>
                    <Subscribe/>
                </div>
                )
        }
    }
}
