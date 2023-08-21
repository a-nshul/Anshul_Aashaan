import { Link } from "react-router-dom";
import { sideBarConstant } from "../../Constant/sidebarConstant";

function SideBar() {
  return (
    <div>
      <div class="card aasan-sidebar">
        <div class="card-body">
          <ul class="nav flex-column">
            {sideBarConstant?.OPTIONS.map((item) => {
              return (
                <>
                  <li class="nav-item">
                    <Link class="nav-link aasan-option-link" aria-current="page" to={item?.PATH}>
                      {item?.TITLE}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
