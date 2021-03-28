/* eslint-disable */
import React from 'react';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./Main.css"

import SettingModal from './SettingModal'

import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import audioon from '../assets/audioon.svg';
import audiooff from '../assets/audiooff.svg';
import videoon from '../assets/videoon.svg';
import videooff from '../assets/videooff.svg';
import Camera from '../Camera';
export default class Main extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            audio: false,
            video: false,
            isPaneOpen: false,
        }
    }
    render() {
        const { audio, video, isPaneOpen }: any = this.state;
        return (
            <div>
                <div className="top-menu">
                    <div>
                        {audio && (
                            <button className="recording green" disabled>Audio Recording</button>
                        )}
                        {video && (
                            <button className="recording red" disabled>Video Recording</button>
                        )}
                    </div>
                </div>
                <div className="menu">
                    <button onClick={() => this.setState({ audio: !audio })} className={!audio ? "start-stop-btn blue" : "start-stop-btn red"}>
                        <img className="icon1" src={audio ? audioon : audiooff} />
                        {audio ? "Stop " : "Start "} Audio
                    </button>
                    <button onClick={() => this.setState({ video: !video })} className={!video ? "start-stop-btn blue" : "start-stop-btn red"}>
                        <img className="icon2" src={video ? videoon : videooff} />
                        {video ? "Stop " : "Start "} Video
                    </button>

                    <SettingModal />
                </div>

                {
                    video && (
                        <div className="top-menu">
                            <Camera />
                        </div>
                    )
                }
            </div >
        )
    }
}
