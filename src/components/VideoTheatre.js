import { useData } from "../context/data-context";
import { AddToPlaylist } from "./AddToPlaylist";
import { VideoPlayer } from "./VideoPlayer";

export function VideoTheatre() {
  const { state } = useData();

  return (
    <div>
      <VideoPlayer
        displayProperties={{
          controls: true,
          autoPlay: true,
          srcUrl: state.currentPlayingVideo.srcUrl,
        }}
      />
      <h2>{state.currentPlayingVideo.name}</h2>
      <AddToPlaylist />
    </div>
  );
}
