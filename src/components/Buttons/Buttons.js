import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { goup, godown } from './../Counter/Counter';
import Functional, { } from './../Functional/Functional';
import {updateName, updateID} from './../../ducks/reducer';
import {getLukeSkywalker} from './../../services/starWars'
import axios from 'axios';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.stateSetter = this.stateSetter.bind(this);
        this.state = {
            tester: 0,
            luke: {},
            names: {},
            nameArray: {}
        }
    }

    // componentDidMount(){
    //     getLukeSkywalker().then(luke => {
    //         this.setState({
    //             luke: luke
    //         })
    //     })
    // }

    componentDidMount() {
        axios.get('/api/getOne').then((res) => {
          console.log(res);
    
         
          this.setState({
            names: res.data,
            nameArray: res.data[0]
          })
        })
      }


stateSetter(){
    this.setState({
        tester: 5
      })
    
}

    render() {
        const {
            currentValue,
            goup,
            godown
        } = this.props;
        
        return (
        <div>
            <div></div>
             <div><button onClick={()=>this.stateSetter()}>setState function {this.state.tester}</button></div>
             {/* Here is the version with the bind you requested! */}
            <div><button onClick={this.stateSetter.bind()}>setState function {this.state.tester}</button></div>
            <Functional tester={this.state.tester}/> 
            <div>Hello {this.props.asset_id}</div>
            <div>And here {this.props.assetName}</div>
            <button onClick={()=>this.props.updateName('Jerk')}>Action Creator </button>
            <button onClick={()=>this.props.updateID(5)}>Action Creator </button>
            
            <div>WHY ARE YOU NOT WORKING?!?!?!?!</div>
            <div>WHY ARE YOU NOT WORKING?!?!?!?!</div>
            <div>WHY ARE YOU NOT WORKING?!?!?!?!</div>
            <div>WHY ARE YOU NOT WORKING?!?!?!?!</div>
        </div>
        );
    }
}

function mapStateToProps(state){
    return state
}
const outputActions ={
    updateName
}

export default connect(mapStateToProps,{updateName, updateID}) (Buttons);