import { Link } from "react-router-dom";
import { VideoBanners } from "../../components/VideoBanner";
import { useData } from "../../contexts/data-context";
import { TOGGLE_SAVE_VIDEO } from "../../reducer/reducer";

export function WatchHistory() {
  const { state, dispatch } = useData();
  return (
    <div className="history-container">
      <h1>Watch History</h1>
      {state.watchHistory.map((video) => (
        <VideoBanners video={video} />
      ))}
    </div>
  );
}
