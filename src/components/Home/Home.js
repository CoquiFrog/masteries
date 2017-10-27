import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tester: 0
        }
    }
    render() {
        return (
            <div className="backimage">
               <Link to='/Buttons'><button className='gradient bigbutton'>Soundboard</button></Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <div className="papyrus shaker">Hello hello hello </div>
            
            <div className="fader">Goodbye goodbye goodbye</div>
            
            
            
            </div>
        );
    }
}

export default Home;