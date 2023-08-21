import { Routes, Route } from "react-router-dom";
import { PublicRouteList } from "../../Router/routeList";

function PublicRouting() {
  /**
     controlling routes and pages component
     **/
  const handleRouting = () => {
    return PublicRouteList.map((item) => {
      return (
        <Route path={item?.path} element={item?.component} key={item?.path} />
      );
    });
  };

  return (
    <>
      <Routes>{handleRouting()}</Routes>
    </>
  );
}

export default PublicRouting;
