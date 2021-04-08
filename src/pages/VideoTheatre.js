import { useLocation } from "react-router-dom";
import { useData } from "../context/data-context";
import { AddToPlaylist } from "../components/AddToPlaylist";
import { VideoPlayer } from "../components/VideoPlayer";
import { ADD_TO_WATCH_HISTORY } from "../reducer/reducer";
import { useEffect, useState } from "react";

export function VideoTheatre() {
  const { state, dispatch } = useData();
  const routeLocation = useLocation();

  useEffect(() => {
    dispatch({ type: ADD_TO_WATCH_HISTORY, payload: routeLocation.state });
  }, []);

  const [displayNotes, setDisplayNotes] = useState(false);

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
      <div className="video-info">
        <h2>{routeLocation.state.name}</h2>
        <p>{routeLocation.state.duration}</p>
        <div>{routeLocation.state.description}</div>
        <button className="btn btn-secondary">
          <i class="fas fa-list"></i> <span>Add to Playlist</span>
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setDisplayNotes(true)}
        >
          <i class="fas fa-sticky-note"></i> <span>Add your Notes</span>
        </button>
      </div>
      <div
        id="myModal"
        className={displayNotes ? "modal display-unset" : "modal"}
      >
        <div class="modal-content">
          <span onClick={() => setDisplayNotes(false)} className="close">
            <i class="far fa-window-close"></i>
          </span>
          Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
          dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
          ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
        </div>
      </div>
      <AddToPlaylist video={routeLocation.state} />
    </div>
  );
}
