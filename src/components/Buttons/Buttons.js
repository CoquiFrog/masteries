import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {updateName} from './../../ducks/reducer';
import { goup, godown } from './../Counter/Counter';
import Functional, { } from './../Functional/Functional';

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
            <div>Hello {JSON.stringify( this.props.currentValue)}</div>
             <div><button onClick={()=>this.stateSetter()}>setState function {this.state.tester}</button></div>
            <Functional tester={this.state.tester}/> 
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

export default connect(mapStateToProps) (Buttons);