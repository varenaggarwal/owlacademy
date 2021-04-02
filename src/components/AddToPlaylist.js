import { useState } from "react";
import { useData } from "../context/data-context";
import { ADD_NEW_PLAYLIST } from "../reducer/reducer";

export function AddToPlaylist({ video }) {
  const { state, dispatch } = useData();
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const addNewPlaylist = () => {
    dispatch({ type: ADD_NEW_PLAYLIST, payload: { newPlaylistName, video } });
  };

  const allPlaylists = Object.keys(state.userPlaylists);
  return (
    <div>
      <h1>Playlist</h1>
      <div>
        {console.log(state.userPlaylists)}
        {allPlaylists.map((playlist) => (
          <div>
            <input type="checkbox"></input>
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
