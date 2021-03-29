import { useData } from "../context/data-context";
import { VideoPlayer } from "./VideoPlayer";

export function VideoCollection() {
  const { state } = useData();
  const videoData = state.videoData;

  return (
    <div>
      {state.videoData.map((video) => (
        <div className="card card-shadow">
          <VideoPlayer
            displayProperties={{
              controls: false,
              autoPlay: false,
              src: video.src,
            }}
          />
          {video.name}
          <button onClick={() => console.log("play")}> Play</button>
        </div>
      ))}
    </div>
  );
}
