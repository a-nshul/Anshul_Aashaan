import Login from "../Pages/Auth/login";
import Device from "../Pages/Device";
import Wireless from "../Pages/Wireless";
import Clients from "../Pages/Clients";
import Firmware from "../Pages/Firmware";

export const PublicRouteList = [
  {
    path: "/",
    component: <Login />,
  },
];

export const PrivateRouteList = [
  {
    path: "/myrouters",
    component: <Device />,
  },
  {
    path: "/wireless",
    component: <Wireless />,
  },
  {
    path: "/clients",
    component: <Clients />,
  },
  {
    path: "/general",
    component: <Firmware />,
  },
];
