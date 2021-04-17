import { Link } from "react-router-dom";

export function BottomNavigation() {
  return (
    <div className="bottom-navigation-container">
      <Link to="/">
        <i className="fa fa-fas fa-home"></i>
      </Link>
      <Link to="/history">
        <i className="fas fa-history"></i>
      </Link>
      <Link to="/bookmarked">
        <i className="fas fa-bookmark"></i>
      </Link>
      <Link to="/playlists">
        <i className="fas fa-list"></i>
      </Link>
    </div>
  );
}
