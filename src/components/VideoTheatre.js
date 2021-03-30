import { useData } from "../context/data-context";
import { VideoPlayer } from "./VideoPlayer";

export function VideoTheatre() {
  const { state } = useData();
  // const currentPlayingVideo = state.currentPlayingVideo;

  return (
    <div>
      <h1>VT</h1>
      <VideoPlayer
        displayProperties={{
          controls: true,
          autoPlay: true,
          src: state.currentPlayingVideo.src,
        }}
      />
      <h2>{state.currentPlayingVideo.name}</h2>
    </div>
  );
}
