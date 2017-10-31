import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router';
import './index.css';



class App extends Component {
  render() {
    return (
      <div>
      
        <p className="App backgroundcolor">
          Welcome to the application made by Paul
        </p>
        {router}
      </div>
    );
  }
}

export default App;

//  Web semantics are how HTML uses descriptive tags to communicate information about the function of the element you
// using.  For example H1 indicates that you are writing or making a header.  tags like <b> and <i> are not semantic,
//     because other than bolding or modifying the font, it does not describe what they do.  Using semantics is best
//     practice because it communicates to other people how and why things are being built.  They are important
//     because communication is important. -->


//     All HTML need to have a DOCTYPE declared. The DOCTYPE is not actually an element or HTML tag.
//      It lets the browser know how the document should be interpreted, by indicating what version
//       or standard of HTML (or other markup language) is being used. -->
    
 
//       Meta data are settings that modify the language that your HTML is working in, and the width of the screen,
//       and the type of characters it is displaying, and a bunch of other different things you can set.  Meta data
//       is placed in the head of the HTML board at the top, right after the doctype version selection.
     
//      example of meta data:
     
//       <!doctype html>
//       <html lang="en">
//         <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//           <meta name="theme-color" content="#000000">
        