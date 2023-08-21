import { contentConstant } from "../../Constant/content";

function Header(props) {
    return (
      <div>
          <h2 className="aasan-heading">{contentConstant[props.type].TITLE}</h2>
      </div>
    );
  }
  
  export default Header;
  