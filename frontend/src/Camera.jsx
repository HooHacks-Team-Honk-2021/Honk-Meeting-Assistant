import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { io }  from "socket.io-client";
import Webcam from 'react-webcam';

const FPS = 0.5;

class Camera extends React.Component {

    constructor(props) {
        super(props)
        this.webcam = React.createRef()
        const SERVER = "http://localhost:5000/";
        this.socket = io(SERVER)
        this.screenshot = this.screenshot.bind(this)
    }

  componentDidMount() {
  
    
    console.log("initialized socket")
    this.socket.on("connect", () => {});
    
    this.socket.on("responseMessage", message => {
        console.log("responseMessage", message)
    })
    
    this.interval = setInterval(this.screenshot, 1000 / FPS);

  }

  componentWillUnmount() {
      clearInterval(this.interval);
  }

   screenshot() {
       var screenshot = this.webcam.current.getScreenshot();
       console.log(screenshot)
       this.socket.emit("frame", {"data": screenshot})
   } 

  render() {
      return(
          <div>  
            <Webcam  
                ref={this.webcam}
            />
          </div>
      )
  }
}

export default Camera;