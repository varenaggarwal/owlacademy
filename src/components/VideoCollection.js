import { useData } from "../context/data-context";
import { PLAY_VIDEO, ROUTE } from "../reducer/reducer";
import { VideoPlayer } from "./VideoPlayer";

export function VideoCollection() {
  const { state, dispatch } = useData();
  const videoData = state.videoData;

  const playVideo = (video) => {
    dispatch({ type: ROUTE, payload: "videoTheatre" });
    dispatch({ type: PLAY_VIDEO, payload: video });
  };

  return (
    <div>
      {state.videoData.map((video) => (
        <div key={video.id} className="card">
          <img src={video.thumbnailImg} />
          <p>{video.name}</p>
          <button
            className="btn btn-secondary"
            onClick={() => playVideo(video)}
          >
            Play
          </button>
        </div>
      ))}
    </div>
  );
}
