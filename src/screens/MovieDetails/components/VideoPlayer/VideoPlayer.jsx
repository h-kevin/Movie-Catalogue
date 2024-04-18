import React from "react";

const VideoPlayer = ({ trailerUrl }) => (
  <div className="video-player-container">
    <iframe
      id="ytplayer"
      type="text/html"
      src={trailerUrl}
      allow="autoplay"
      className="video-player"
    />
  </div>
);

export default VideoPlayer;
