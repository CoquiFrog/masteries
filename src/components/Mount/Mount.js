// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// export default class Mount extends React.Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//           vehiclesToDisplay: {}
//         }
//     }
  
//     componentDidMount() {
//       this.UserList();
//     }
  
//     UserList() {
//         axios.get('https://swapi.co/api/people/1')
//                   .then( res => {
                    
//                       this.setState({
//                         vehiclesToDisplay: res.data
//                       });
//     });
// }
  
//     render() {
      
  
//       return (
//       <div>
//           <div>{ this.state.vehiclesToDisplay }</div>
//         </div>
//       );
//     }
//   }