import { Link } from "react-router-dom";
import { useData } from "../contexts/data-context";
import { ROUTE } from "../reducer/reducer";

export function Navbar() {
  const { state, dispatch } = useData();
  return (
    <nav className="nav-bar nav-bar-shadow">
      <Link className="main-heading" to="/">
        <h1>OwlAcademy</h1>
      </Link>
    </nav>
  );
}
