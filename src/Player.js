import React from 'react';
import { Howl } from 'howler';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      currentTrack: null,
      volume: 0.5,
      playlist: [
        { id: 1, title: 'Track 1', src: 'track1.mp3' },
        { id: 2, title: 'Track 2', src: 'track2.mp3' },
        // Add more tracks as needed
      ]
    };
    this.audio = null;
  }

  playTrack(track) {
    if (this.audio) {
      this.audio.stop();
    }
    this.audio = new Howl({
      src: [track.src],
      volume: this.state.volume,
      onend: () => {
        this.setState({ isPlaying: false });
      }
    });
    this.audio.play();
    this.setState({ isPlaying: true, currentTrack: track });
  }

  togglePlay() {
    if (this.state.isPlaying) {
      this.audio.pause();
      this.setState({ isPlaying: false });
    } else {
      this.audio.play();
      this.setState({ isPlaying: true });
    }
  }

  setVolume(volume) {
    this.audio.volume(volume);
    this.setState({ volume });
  }

  render() {
    const { isPlaying, currentTrack, volume, playlist } = this.state;
    return (
      <div className="Player">
        <h2>Player</h2>
        <div>
          {currentTrack && <h3>Now Playing: {currentTrack.title}</h3>}
          <button onClick={() => this.togglePlay()}>{isPlaying ? 'Pause' : 'Play'}</button>
          <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(e) => this.setVolume(e.target.value)} />
        </div>
      </div>
    );
  }
}

export default Player;
