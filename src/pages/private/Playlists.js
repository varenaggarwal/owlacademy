import { VideoBanners } from "../../components/VideoBanner";
import { useData } from "../../contexts/data-context";

export function Playlists() {
  const { state } = useData();

  const userPlaylists = Object.keys(state.userPlaylists);

  return (
    <div className="playlist-container">
      <h1>Playlists</h1>
      {userPlaylists.map((playlist) => (
        <div>
          <h2>{playlist}</h2>
          <div>
            {state.userPlaylists[playlist].map((video) => (
              <VideoBanners video={video} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
