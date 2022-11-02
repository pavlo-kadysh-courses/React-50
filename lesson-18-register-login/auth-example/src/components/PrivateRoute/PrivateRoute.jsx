// router
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../shared/hooks/useAuth";

export default function PrivateRoute() {
  const isLogin = useAuth();

  if (!isLogin) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}
