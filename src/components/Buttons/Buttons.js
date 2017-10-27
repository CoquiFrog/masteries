import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {updateName} from './../../ducks/reducer'

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tester: 0
        }
    }
    render() {
        return (
        <div>
            <div>Hello</div>

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