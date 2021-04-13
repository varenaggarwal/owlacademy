import { useLocation, useParams } from "react-router-dom";
import { useData } from "../contexts/data-context";
import { AddToPlaylist } from "../components/AddToPlaylist";
import { VideoPlayer } from "../components/VideoPlayer";
import { ADD_TO_WATCH_HISTORY } from "../reducer/reducer";
import { useEffect, useState } from "react";
import { Notes } from "../components/Notes";

export function VideoTheatre() {
  const { state, dispatch } = useData();
  const { videoId } = useParams();

  useEffect(() => {
    dispatch({ type: ADD_TO_WATCH_HISTORY, payload: currentVideo });
  }, []);

  const getVideoDetails = (videoData, videoId) => {
    return videoData.find((video) => video.id === videoId);
  };
  const currentVideo = getVideoDetails(state.videoData, videoId);

  console.log(state.watchHistory);
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
      <Notes video={currentVideo} />
      {/* <div
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
      </div> */}
      {/* <AddToPlaylist video={currentVideo} /> */}
    </div>
  );
}
