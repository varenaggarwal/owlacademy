import ReactPlayer from "react-player/youtube";

export function VideoPlayer({ displayProperties }) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={displayProperties.srcUrl}
        width="100%"
        height="100%"
        controls={displayProperties.controls}
        playing={displayProperties.autoPlay}
        onDuration={(duration) => console.log(duration)}
      />
    </div>
  );
}
