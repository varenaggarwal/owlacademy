import { useData } from "../context/data-context";
import { AddToPlaylist } from "./AddToPlaylist";
import { VideoPlayer } from "./VideoPlayer";

export function VideoTheatre() {
  const { state } = useData();

  return (
    <div className="videoTheater-container">
      <div className="player-container">
        <VideoPlayer
          displayProperties={{
            controls: true,
            autoPlay: true,
            srcUrl: state.currentPlayingVideo.srcUrl,
          }}
        />
      </div>
      <h2>{state.currentPlayingVideo.name}</h2>
      <p>{state.currentPlayingVideo.duration}</p>
      <AddToPlaylist video={state.currentPlayingVideo} />
    </div>
  );
}
