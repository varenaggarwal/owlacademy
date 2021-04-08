import { useData } from "../contexts/data-context";
import { ROUTE } from "../reducer/reducer";

export function Navbar() {
  const { state, dispatch } = useData();
  return (
    <nav className="nav-bar nav-bar-shadow">
      {/* <button
        className={
          state.route === "videoCollection"
            ? "visibility-hidden"
            : "btn btn-primary btn-thin"
        }
        onClick={() => dispatch({ type: ROUTE, payload: "videoCollection" })}
      >
        <i className="fas fa-arrow-left"></i>
      </button> */}
      Video Lab
    </nav>
  );
}
