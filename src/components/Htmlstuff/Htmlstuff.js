import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';




class Htmlstuff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tester: 0,
           
        }
    }
    
    componentDidMount() {
        axios.get('/api/getNew').then((res) => {
          console.log(res);
    
          this.setState({
            kanjiArray: res.data,
            kanji: res.data[0]
          })
        })
      }
    



    render() {
        return (
            <div>
                <p></p>
            </div>
        );
    }
}

export default Htmlstuff;