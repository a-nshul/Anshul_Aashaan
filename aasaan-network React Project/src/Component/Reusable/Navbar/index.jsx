import Dropdown from "react-bootstrap/Dropdown";
import LogoImage from "../../../static/image/logoImage";

function NavBar() {
  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand">
            <LogoImage />
          </a>
          <Dropdown>
            <Dropdown.Toggle className={"aasan-profile"}>
              <i class="fa fa-user" aria-hidden="true"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
