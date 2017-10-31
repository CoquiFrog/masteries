import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { goup, godown } from './../Counter/Counter';
import axios from 'axios';

export default class Api extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
            items: [],
            vehiclesToDisplay: [],
            turdmuffin: ['1','1','2'],
            url: 'https://joes-autos.herokuapp.com'
        };
        this.getVehicles = this.getVehicles.bind(this);
   }
   
//    componentDidMount() {
//        fetch(`http://localhost:3000/#/api/swapi.co/people/1/`) 
//            .then(result=> {
//                this.setState({items:result.json()});
//            });
//    }

componentDidMount() {
    this.getVehicles();
  }
   
getVehicles() {
  
    axios.get('https://joes-autos.herokuapp.com/api/vehicles/').then((res) => {
      console.log(res);
      this.setState({
        vehiclesToDisplay: res.data[1]
      })
    console.log(this.state.vehiclesToDisplay)
    })

}

   render() {        
       return(
           <div>
               <div>HELLO THERE I AM HERE</div>
                <div>{this.state.vehiclesToDisplay.make}</div>
           </div>  
       );
   }
}