import MainNavbar from "./MainNavbar";
import Home from './Home'
function Layout() {
  return (
    <div style={{ height: "100%",backgroundColor: "#212121" }}>
      {/* Barra de navegacion */}
      <MainNavbar />
      {/* Content */}
      <div className="container p-5 text-light">
        <Home />
      </div>
    </div>
  );
}

export default Layout;
