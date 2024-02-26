import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import NotePermission from "../components/erros/NotePermission";

const ProtectedRoute = () => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  if (isLoading) return false;

  if (pathname === "/") return <Outlet />;

  return user ? <Outlet /> : <NotePermission />;
};

export default ProtectedRoute;
