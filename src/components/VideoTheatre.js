import { useData } from "../context/data-context";
import { VideoPlayer } from "./VideoPlayer";

export function VideoTheatre() {
  const { state } = useData();
  const currentPlayingVideo = state.videoData.filter((video) =>
    state.currentPlayingVideoId === video.id ? video : null
  )[0];

  return (
    <div>
      <h1>VT</h1>
      {console.log(currentPlayingVideo)}
      <VideoPlayer
        displayProperties={{
          controls: true,
          autoPlay: true,
          src: currentPlayingVideo.src,
        }}
      />
      <h2>{currentPlayingVideo.name}</h2>
    </div>
  );
}
