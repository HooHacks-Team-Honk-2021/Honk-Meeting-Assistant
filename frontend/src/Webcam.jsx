import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { io }  from "socket.io-client";
import Webcam from 'react-webcam';

const WebcamComponent = () => <Webcam />;
const FPS = 0.5;

class Hello extends React.Component {

    constructor(props) {
        super(props)
        this.webcam = React.createRef()
        const SERVER = "http://127.0.0.1:5000";
        this.socket = io(SERVER)
        this.screenshot = this.screenshot.bind(this)
    }

  componentDidMount() {
  
    console.log("initialized socket")
    this.socket.on("connect", () => {
      ReactDOM.render(<p>connected</p>, document.getElementById("hello"));
    });
    this.socket.on("responseMessage", message => {
      console.log("responseMessage", message)
      console.log(message.data)
      ReactDOM.render(<p>{message.data}</p>, document.getElementById("hello"));
     })

     this.interval = setInterval(this.screenshot, 1000 / FPS);

  }

  componentWillUnmount() {
      clearInterval(this.interval);
  }

  sendPicData() {
    console.log("hi this worked")
   }

   screenshot() {
       var screenshot = this.webcam.current.getScreenshot();
       console.log("Ss")
       this.socket.emit("frame", {"data": screenshot})
   } 
 
  render() {
      return(
          <div>
            <div id="hello"></div>
            <Webcam 
                onUserMedia={this.sendPicData}
                ref={this.webcam}
            />
            {/*<button onClick={this.screenshot}>Cap</button>*/}
        </div>
      )
  }
}

export default Hello;