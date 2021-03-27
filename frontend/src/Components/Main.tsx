/* eslint-disable */
import React from 'react';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./Main.css"


import ModalView from './ModalView'

import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import audioon from '../assets/audioon.svg';
import audiooff from '../assets/audiooff.svg';
import videoon from '../assets/videoon.svg';
import videooff from '../assets/videooff.svg';

const StartStopButton = withStyles({
    root: {
        fontFamily: 'Roboto',
        backgroundColor: '#42A4FF'
    }
})(Button);
export default class Main extends React.Component {
    constructor(props:any) {
        super(props);
        this.state = {
            audio: false,
            video: false, 
            isPaneOpen: false, 
        }
    }
    render() {
        const { audio, video, isPaneOpen }:any = this.state;
        return(
            <div>
                <div className="">
                    <button className="recording red">Video Recording</button>
                    <button className="recording green">Audio Recording</button>
                   <ModalView/> 
                </div>  
                <div className="menu">
                    <button onClick={() => this.setState({audio:!audio})} className={audio ? "start-stop-btn blue" : "start-stop-btn red"}>
                        <img className="icon1" src={audio ? audioon : audiooff}/>
                        {audio ? "Stop " : "Start "} Audio
                    </button>
                    <button onClick={() => this.setState({video:!video})} className={video ? "start-stop-btn blue" : "start-stop-btn red"}>
                        <img className="icon2" src={video ? videoon : videooff}/>
                        {video ? "Stop " : "Start "} Video
                    </button>
                </div>        
            </div>
        )
    }
}

/*

                    <StartStopButton className={audio && "red"}>{audio ? "Stop " : "Start "} Audio</StartStopButton>
                    <StartStopButton className={video ? "start-stop-btn" : "start-stop-btn red"}>{video ? "Stop " : "Start "} Video</StartStopButton>

*/