import { useData } from "../../contexts/data-context";

export function Playlists() {
  const { state } = useData();

  const userPlaylists = Object.keys(state.userPlaylists);

  return (
    <div className="playlist-container">
      <h1>Playlists</h1>
      {userPlaylists.map((playlist) => {
        // console.log("inherre");
        <h2>Hi</h2>;
      })}
      <h1>Hello</h1>
      {console.log(userPlaylists)}
    </div>
  );
}
