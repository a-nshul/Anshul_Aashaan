import { contentConstant } from "../../Constant/content";

function SubHeader(props) {
  return (
    <div>
      <h4 className="aasan-heading">
        {contentConstant[props.type].MODAL_TITLE}
      </h4>
    </div>
  );
}

export default SubHeader;
