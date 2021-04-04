import { Link } from "react-router-dom";

export function SideMenu() {
  return (
    <div className="side-menu">
      <ul className="list list-menu">
        <Link to="/">
          <li>
            <span>
              <i className="fa fa-fas fa-home"></i>
            </span>
            <span>Home</span>
          </li>
        </Link>
        <Link to="/history">
          <li>
            <span>
              <i className="fas fa-history"></i>
            </span>
            <span> Watch History</span>
          </li>
        </Link>
        <Link to="/bookmarked">
          <li>
            <span>
              <i className="fas fa-bookmark"></i>
            </span>
            <span>Bookmarked</span>
          </li>
        </Link>
        <Link to="/playlists">
          <li>
            <span>
              <i className="fas fa-list"></i>
            </span>
            <span>Playlists</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
