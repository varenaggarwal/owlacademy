import { VideoBanners } from "../../components/VideoBanner";
import { useData } from "../../contexts/data-context";

export function Bookmarked() {
  const { state, dispatch } = useData();

  return (
    <div className="bookmarked-container">
      <h1>Bookmarked</h1>
      {state.savedVideos.map((video) => (
        <VideoBanners video={video} />
      ))}
    </div>
  );
}
