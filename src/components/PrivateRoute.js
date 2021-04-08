import { Navigate, Route } from "react-router";
import { useAuth } from "../contexts/auth-context";

export function PrivateRoute({ path, ...props }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
