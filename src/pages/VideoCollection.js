import { Link } from "react-router-dom";
import { VideoBanners } from "../components/VideoBanner";
import { useData } from "../contexts/data-context";
import { TOGGLE_SAVE_VIDEO } from "../reducer/reducer";

export function VideoCollection() {
  const { state, dispatch } = useData();

  return (
    <div className="video-collection">
      {state.videoData.map((video) => (
        <VideoBanners video={video} />
      ))}
    </div>
  );
}
