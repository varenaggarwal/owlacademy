import { Link } from "react-router-dom";
import { useData } from "../contexts/data-context";
import { TOGGLE_SAVE_VIDEO } from "../reducer/reducer";

export function VideoCollection() {
  const { state, dispatch } = useData();

  return (
    <div className="video-collection">
      {state.videoData.map((video) => (
        <div key={video.id} className="card">
          <Link to={{ pathname: `/watch/${video.id}` }} state={video}>
            <img className="img-responsive" src={video.thumbnailImg} />
            <p>{video.name}</p>
          </Link>
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
