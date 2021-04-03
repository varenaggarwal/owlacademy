export function SideMenu() {
  return (
    <div className="side-menu">
      {/* <h1>Side Menu</h1> */}
      <ul class="list list-menu">
        <li>
          <span>
            <i className="fa fa-fas fa-home"></i>
          </span>
          <span>Home</span>
        </li>
        <li>
          <span>
            <i className="fas fa-history"></i>
          </span>
          <span> Watch History</span>
        </li>
        <li>
          <span>
            <i class="fas fa-bookmark"></i>
          </span>
          <span>Bookmarked</span>
        </li>
        <li>
          <span>
            <i class="fas fa-list"></i>
          </span>
          <span>Playlists</span>
        </li>
      </ul>
    </div>
  );
}
