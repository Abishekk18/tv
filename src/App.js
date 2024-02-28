import { useState } from 'react';
import './App.css';
import ReactHlsPlayer from 'react-hls-player';
import Dropdown from './Dropdown';

function App() {

  const [selectedFile, setSelectedFile] = useState('');

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const options = [
    { value: 'https://6n3yogbnd9ok-hls-live.5centscdn.com/threetamil/d0dbe915091d400bd8ee7f27f0791303.sdp/index.m3u8', label: 'Tamil' },
    { value: 'https://vidcdn.vidgyor.com/ptm-origin/aslive/playlist.m3u8', label: 'Asianet News' },
    { value: 'https://live.streamjo.com/eetlive/eettv.m3u8', label: 'EET TV' }
    // Add more options as needed
  ];

  return (
    <>
    <h1>React TV</h1>
    <ReactHlsPlayer
    src={selectedFile}
    autoPlay={true}
    controls={true}
    width="70%"
    height="auto"
    hlsConfig={{
      maxLoadingDelay: 4,
      minAutoBitrate: 0,
      lowLatencyMode: true,
    }}
  />
  <Dropdown options={options} onSelect={handleFileSelect}></Dropdown>
    </>
  );
}

export default App;
