import React, { Component } from 'react'


//Data
import Data from '../db.json'

//Components
import Featured from './Featured';
import Subscribe from './Subscribe'
import Blocks from './Blocks'
import Poll from './Poll';


export default class Home extends Component {


    state={
        home: '',
        waiting: true
    }

    componentDidMount() {
        
        setTimeout(()=>{
            
            this.setState({
                home: Data.home,
                waiting: false
            })
        }, 800)
        
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
                    <Blocks blocks={this.state.home.blocks}/>
                    <Poll/>
                </div>
                )
        }
    }
}
