import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Tests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tester: 0
        }
    }
    render() {
        return (
            <div className="backimage">
                <div id="section1"></div>
               <br></br>
               <div className="box">This is a static box</div>
               <br></br>
               <br></br>
               <div className="box2">This is a fixed box</div>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <div className="box3">This is an absolute box</div>
               <br></br>
               <div className="box4">This is an absolute box</div>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <div className="box5">This box is floated right</div>
               <br></br>
               <br></br>
               <div className="inlineit">
                   <p>This is </p>
                   <p>an example of</p>
                   <p>making things disappear </p>
                   <p>with display!</p>
               </div>

               <div className="App papyrus shaker" id="theid">Hello hello hello </div>

               <div className="App fader">Goodbye goodbye goodbye</div>

               <li><a href="#section1">First Section</a></li>

            </div>
        );
    }
}

export default Tests;