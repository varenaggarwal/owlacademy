import { useState } from "react";
import { useData } from "../context/data-context";
import { ADD_NEW_PLAYLIST, TOGGLE_INTO_PLAYLIST } from "../reducer/reducer";
import { isIdPresentinArrayofObjects } from "../reducer/utility-operators";

export function AddToPlaylist({ video }) {
  const { state, dispatch } = useData();
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const addNewPlaylist = () => {
    dispatch({ type: ADD_NEW_PLAYLIST, payload: { newPlaylistName, video } });
  };

  const toggleIntoPlaylist = (playlist) => {
    dispatch({ type: TOGGLE_INTO_PLAYLIST, payload: { playlist, video } });
  };
  const allPlaylists = Object.keys(state.userPlaylists);
  return (
    <div>
      <h1>Playlist</h1>
      <div>
        {allPlaylists.map((playlist) => (
          <div>
            <input
              onChange={() => toggleIntoPlaylist(playlist)}
              checked={isIdPresentinArrayofObjects(
                state.userPlaylists[playlist],
                video.id
              )}
              type="checkbox"
            ></input>
            <span>{playlist}</span>
          </div>
        ))}
        <input
          onChange={(event) => setNewPlaylistName(event.target.value)}
        ></input>
        <button onClick={addNewPlaylist}>New playlist</button>
      </div>
    </div>
  );
}
