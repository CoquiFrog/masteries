import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {updateName} from './../../ducks/reducer';
import { goup, godown } from './../Counter/Counter';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tester: 0
        }
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