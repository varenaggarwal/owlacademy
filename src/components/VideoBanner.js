import { Link } from "react-router-dom";
import { useData } from "../contexts/data-context";
import { TOGGLE_SAVE_VIDEO } from "../reducer/reducer";

export function VideoBanners({ video }) {
  const { dispatch } = useData();
  return (
    <div>
      <div key={video.id} className="card">
        <Link
          className="video-link"
          to={{ pathname: `/watch/${video.id}` }}
          state={video}
        >
          <img className="img-responsive" src={video.thumbnailImg} />
          <div className="card-text">
            <p>{video.name}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
