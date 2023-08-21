import { Routes, Route } from "react-router-dom";
import { PrivateRouteList } from "../../Router/routeList";
import SideBar from "../../Component/Reusable/SideBar";
import NavBar from "../../Component/Reusable/Navbar";

function PrivateLayout() {
  /**
    controlling routes of all pages
    **/
  const handleRouting = () => {
    return PrivateRouteList.map((item) => {
      return (
        <Route path={item?.path} element={item?.component} key={item?.path} />
      );
    });
  };

  return (
    <>
      <div className="aasan-private-body">
        <div className="aasan-container">
          <NavBar />
          <br />
          <div class="row aasan-sidebar-row">
            <div class="col-sm-2">
              <SideBar />
            </div>
            <div class="col-sm-10 aasan-content">
              <Routes>{handleRouting()}</Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivateLayout;
