import { useParams } from "react-router-dom";
import { useData } from "../contexts/data-context";
import { AddToPlaylist } from "../components/AddToPlaylist";
import { VideoPlayer } from "../components/VideoPlayer";
import { ADD_TO_WATCH_HISTORY, UPDATE_NOTE } from "../reducer/reducer";
import { useEffect, useState } from "react";
import { Notes } from "../components/Notes";

export function VideoTheatre() {
  const [displayNotes, setDisplayNotes] = useState(false);
  const { state, dispatch } = useData();
  const { videoId } = useParams();

  useEffect(() => {
    dispatch({ type: ADD_TO_WATCH_HISTORY, payload: currentVideo });
  }, []);

  const getVideoDetails = (videoData, videoId) => {
    return videoData.find((video) => video.id === videoId);
  };
  const currentVideo = getVideoDetails(state.videoData, videoId);

  const updateNote = (event) => {
    dispatch({
      type: UPDATE_NOTE,
      payload: { id: currentVideo.id, note: event.target.value },
    });
  };

  return (
    <div className="videoTheater-container">
      <div className="player-container">
        <VideoPlayer
          displayProperties={{
            controls: true,
            autoPlay: true,
            srcUrl: currentVideo.srcUrl,
          }}
        />
      </div>
      <div className="video-info">
        <h2>{currentVideo.name}</h2>
        <p>{currentVideo.duration}</p>
        <div>{currentVideo.description}</div>
        <button
          className="btn btn-secondary"
          onClick={() => setDisplayNotes(true)}
        >
          <i className="fas fa-list"></i> <span>Add to Playlist</span>
        </button>
      </div>
      <div className="scriblepad-container">
        <h2>
          <span>✏️</span>ScriplePad
        </h2>
        <textarea
          className="textbox"
          value={currentVideo.userNotes}
          name="content"
          placeholder="Take a note..."
          onChange={updateNote}
          rows={3}
        ></textarea>
      </div>
      {/* <div className="notes-container">
        <Notes video={currentVideo} />
      </div> */}
      <div
        id="myModal"
        className={displayNotes ? "modal display-unset" : "modal"}
      >
        <div className="modal-content">
          <span onClick={() => setDisplayNotes(false)} className="close">
            <i className="far fa-window-close"></i>
          </span>
          <AddToPlaylist video={currentVideo} />
        </div>
      </div>
    </div>
  );
}
