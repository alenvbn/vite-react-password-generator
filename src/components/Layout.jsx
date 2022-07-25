import { Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar";
function Layout() {
  return (
    <div style={{ height: "100%",backgroundColor: "#212121" }}>
      {/* Barra de navegacion */}
      <MainNavbar />
      {/* Content */}
      <div className="container p-5 text-light">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
