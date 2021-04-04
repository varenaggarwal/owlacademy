import { useLocation } from "react-router-dom";
import { useData } from "../context/data-context";
import { AddToPlaylist } from "./AddToPlaylist";
import { VideoPlayer } from "./VideoPlayer";
import { PLAY_VIDEO } from "../reducer/reducer";
import { useEffect } from "react";

export function VideoTheatre() {
  const { state, dispatch } = useData();
  const routeLocation = useLocation();

  useEffect(() => {
    dispatch({ type: PLAY_VIDEO, payload: routeLocation.state });
  }, []);

  console.log(state.watchHistory);
  return (
    <div className="videoTheater-container">
      <div className="player-container">
        <VideoPlayer
          displayProperties={{
            controls: true,
            autoPlay: true,
            srcUrl: routeLocation.state.srcUrl,
          }}
        />
      </div>
      <h2>{routeLocation.state.name}</h2>
      <p>{routeLocation.state.duration}</p>
      <AddToPlaylist video={routeLocation.state} />
    </div>
  );
}
