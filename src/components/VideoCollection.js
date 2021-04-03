import { useData } from "../context/data-context";
import { PLAY_VIDEO, ROUTE, TOGGLE_SAVE_VIDEO } from "../reducer/reducer";
import { VideoPlayer } from "./VideoPlayer";

export function VideoCollection() {
  const { state, dispatch } = useData();

  const playVideo = (video) => {
    dispatch({ type: ROUTE, payload: "videoTheatre" });
    dispatch({ type: PLAY_VIDEO, payload: video });
  };

  return (
    <div className="video-collection">
      {state.videoData.map((video) => (
        <div key={video.id} className="card">
          <div className="cursor-pointer" onClick={() => playVideo(video)}>
            <img className="img-responsive" src={video.thumbnailImg} />
            <p>{video.name}</p>
          </div>
          <button
            className="btn btn-secondary"
            onClick={() => playVideo(video)}
          >
            Play
          </button>
          <button
            onClick={() =>
              dispatch({ type: TOGGLE_SAVE_VIDEO, payload: video })
            }
            className="btn btn-secondary"
          >
            <i className="fas fa-bookmark"></i>
          </button>
        </div>
      ))}
    </div>
  );
}
