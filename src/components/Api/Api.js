import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { goup, godown } from './../Counter/Counter';
import axios from 'axios';

export default class ItemLister extends React.Component {
   constructor() {
       super();
       this.state = { items: [] };
   }
   
   componentDidMount() {
       fetch(`http://localhost:8088/api/this/is/an/api/call`) 
           .then(result=> {
               this.setState({items:result.json()});
           });
   }
   
   render() {        
       return(
           <div>
               <div>HELLO THERE I AM HERE</div>
                
           </div>  
       );
   }
}