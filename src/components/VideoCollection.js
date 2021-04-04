import { Link } from "react-router-dom";
import { useData } from "../context/data-context";
import {
  ADD_TO_WATCH_HISTORY,
  ROUTE,
  TOGGLE_SAVE_VIDEO,
} from "../reducer/reducer";
import { VideoPlayer } from "./VideoPlayer";

export function VideoCollection() {
  const { state, dispatch } = useData();

  const playVideo = (video) => {
    dispatch({ type: ROUTE, payload: "videoTheatre" });
    dispatch({ type: ADD_TO_WATCH_HISTORY, payload: video });
  };

  return (
    <div className="video-collection">
      {state.videoData.map((video) => (
        <div key={video.id} className="card">
          {/* <div className="cursor-pointer" onClick={() => playVideo(video)}> */}
          <Link to={{ pathname: `/watch/${video.id}` }} state={video}>
            <img className="img-responsive" src={video.thumbnailImg} />
            <p>{video.name}</p>
          </Link>
          {/* </div> */}
          {/* <button
              className="btn btn-secondary"
              onClick={() => playVideo(video)}
            >
              Play
            </button> */}
          {/* <button
              onClick={() =>
                dispatch({ type: TOGGLE_SAVE_VIDEO, payload: video })
              }
              className="btn btn-secondary"
            >
              <i className="fas fa-bookmark"></i>
            </button> */}
        </div>
      ))}
    </div>
  );
}
