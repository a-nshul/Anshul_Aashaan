import { Formik, ErrorMessage } from "formik";
import SubHeader from "../../Reusable/Header/subHeader";
/**
 * import forms element
 */
import Button from "../../Reusable/Form/Button";
import TextAreaField from "../../Reusable/Form/TextArea";

/**
 *  import form scheme and validation
 */
import { deviceInitialValue } from "../../Form/deviceForm";
import { DeviceSchema } from "../../Form/deviceForm";
import { contentConstant } from "../../Constant/content";

const DeviceModal = () => {
  return (
    <>
      <div className="mt-4">
        <div className="pb-2">
          <SubHeader type={"DEVICES"} />
        </div>
        <div className="mt-4">
          <div className="card aasan-card">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 pt-4">
                  <p><strong>{contentConstant["DEVICES"].ADD_DEVICE_CONTENT[0]}</strong></p>
                  <p><strong>{contentConstant["DEVICES"].ADD_DEVICE_CONTENT[1]}</strong></p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 pt-3">
                  <Formik
                    initialValues={deviceInitialValue()}
                    validationSchema={DeviceSchema}
                    onSubmit={(values) => {
                      console.log(values);
                    }}
                  >
                    {({ handleChange, handleSubmit, values, errors }) => (
                      <form onSubmit={handleSubmit}>
                        <TextAreaField
                          name={"key"}
                          onChange={handleChange}
                          value={values.key}
                          rows={"4"}
                          placeholder={"Enter order number, serial numbers, or license keys - one per line"}
                        />
                        <div className="pt-2 pb-4">
                          <Button name={"Submit"} type="submit" />
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
                <div className="col-sm-6 pt-5">
                  <p><strong>{contentConstant["DEVICES"].ADD_DEVICE_CONTENT[2]}</strong></p>
                  <p><strong>{contentConstant["DEVICES"].ADD_DEVICE_CONTENT[3]}</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeviceModal;
