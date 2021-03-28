/* eslint-disable */
import React from 'react';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './Main.css';
import SettingModal from './SettingModal';
import audioon from '../assets/audioon.svg';
import audiooff from '../assets/audiooff.svg';
import videoon from '../assets/videoon.svg';
import videooff from '../assets/videooff.svg';
import Camera from '../Camera';
const { desktopCapturer } = require('electron')

export default class Main extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      audio: false,
      video: false,
    };
    this.recordAudio = this.recordAudio.bind(this);
  }

  recordAudio() {
    const on : any = this.state.audio;
    if(on) {
      return;
    }
    console.log('record')
    desktopCapturer.getSources({ types: ['window', 'screen'] }).then(async sources => {
      console.log(sources)
      for (const source of sources) {
        if (source.name === "Zoom") {
          try {
            console.log('hiii')
            const context = new AudioContext();

            const stream = await navigator.mediaDevices.getUserMedia({
              audio: true,
              video: false
            })

            console.log('stream')
            const microphone = context.createMediaStreamSource(stream);
            const filter = context.createBiquadFilter();
            context.createMediaStreamDestination();
            // microphone -> filter -> destination
            microphone.connect(filter);
            filter.connect(context.destination);
            // idk how stream this data or save or what
          } catch (e) {
            console.log(e)
          }
          return
        }
      }
    })
    
  }


  render() {
    const { audio, video }: any = this.state;
    return (
      <div>
        <div className="top-menu">
          <div>
            {audio && (
              <button className="recording green" disabled>
                Audio Recording
              </button>
            )}
            {video && (
              <button className="recording red" disabled>
                Video Recording
              </button>
            )}
          </div>
        </div>
        <div className="menu">
          <button
            onClick={() => {
              this.setState({ audio: !audio });
              this.recordAudio();
            }}
            className={!audio ? 'start-stop-btn blue' : 'start-stop-btn red'}
          >
            <img className="icon1" src={audio ? audioon : audiooff} />
            {audio ? 'Stop ' : 'Start '} Audio
          </button>
          <button
            onClick={() => this.setState({ video: !video })}
            className={!video ? 'start-stop-btn blue' : 'start-stop-btn red'}
          >
            <img className="icon2" src={video ? videoon : videooff} />
            {video ? 'Stop ' : 'Start '} Video
          </button>

          <SettingModal />
        </div>
        {audio && (
          <div className="top-menu">

          </div>
        )}
        {video && (
          <div className="top-menu">
            <Camera />
          </div>
        )}
      </div>
    );
  }
}
