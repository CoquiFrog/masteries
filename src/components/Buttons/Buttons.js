import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { goup, godown } from './../Counter/Counter';
import Functional, { } from './../Functional/Functional';
import {updateName, updateID} from './../../ducks/reducer';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.stateSetter = this.stateSetter.bind(this);
        this.state = {
            tester: 0
        }
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
            <Functional tester={this.state.tester}/> 
            <div>Hello {this.props.asset_id}</div>
            <div>And here {this.props.assetName}</div>
            <button onClick={()=>this.props.updateName('Jerk')}>Action Creator </button>
            <button onClick={()=>this.props.updateID(5)}>Action Creator </button>
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