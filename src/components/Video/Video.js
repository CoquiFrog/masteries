import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tester: 0
        }
    }
    render() {
        return (
            <div>
               <h1>Hello to everyone!</h1>
               <h1> HIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h1>
               <div> HIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
               <div> HIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
               <div> HIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
               <video src="http://video.webmfiles.org/big-buck-bunny_trailer.webm" controls>
                 <p>Your browser doesn't support HTML5 video. Here is a <a href="http://video.webmfiles.org/big-buck-bunny_trailer.webm">link to the video</a> instead.</p> 
               </video>
               <div> HELLO</div>
               <a href="https://www.computerhope.com/jargon/m/example.mp3">Play sound file</a>
                <div> HIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
                <div> HIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
                <div> HIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
                <div> HIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
                <div> HIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
                <audio
  src="https://www.computerhope.com/jargon/m/example.mp3"
  autoplay>
  Your browser does not support the <code>audio</code> element.
</audio>
                <div> HIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
                <div> HIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
                <div> HIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
                <div> HIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
                <div> HIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
                <div> HIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>

               
            </div>
        );
    }
}

export default Video;