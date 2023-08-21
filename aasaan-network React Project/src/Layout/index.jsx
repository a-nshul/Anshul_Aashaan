import { useCookies } from "react-cookie";
import PrivateLayout from "./PrivateLayout/privateLayout";
import PublicLayout from "./PublicLayout/publicLayout";

function Layout() {
  const [cookies, setCookie] = useCookies();
  return <>{cookies?.sysauth_http ? <PublicLayout /> : <PrivateLayout />}</>;
}

export default Layout;
