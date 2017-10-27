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
                <div className="App">
                    <Link to='/buttons'><button className='gradient bigbutton'>Soundboard</button></Link>
                
</div>
                <br></br>
                <br></br>
                <div className="App">
                    <Link to='/tests'><button className='gradient bigbutton'>Tests</button></Link>
                    </div>
                

            </div>
        );
    }
}

export default Home;