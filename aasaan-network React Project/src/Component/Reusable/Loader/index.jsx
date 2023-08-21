import { loader } from "../../../static/image/index";

/**
 *
 * @param { Loader component showing loader image on page while api is in pending }
 * @returns
 */
const Loader = () => {
  const showLoader = () => {
    return (
      <>
        <div className="row">
          <div align={"center"}>
            <img src={loader} className="aasan-loader" />
          </div>
        </div>
      </>
    );
  };

  return showLoader();
};

export default Loader;
