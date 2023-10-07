import React from 'react';
import video from '../../../Assets/video.mp4';

function Home() {
  return (
    <div className="video-container">
      <video autoPlay muted loop src={video} type="video/mp4" width="100%"height="100%" />
    </div>
  );
}

export default Home;
