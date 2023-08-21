import { Formik, ErrorMessage } from "formik";
import { useState } from "react";
import SubHeader from "../../Reusable/Header/subHeader";
/**
 * import forms element
 */
import InputField from "../../Reusable/Form/Input";
import CheckboxField from "../../Reusable/Form/Checkbox";
import RadioField from "../../Reusable/Form/Radio";
import Button from "../../Reusable/Form/Button";

/**
 *  import form scheme and validation
 */
import { wirlessInitialValue } from "../../Form/wirlessForm";
import { WirlessSchema } from "../../Form/wirlessForm";
import axios from "axios"; 
const WirlessModal = ({show, type, onHide}) => {
  const handleSubmit = async (values) => {
    try {
      // Make the API POST request here
      const response = await axios.post("http://localhost:3000/api/wireless", values);
      console.log("API Response:", response.data);
      onHide();
    } catch (error) {
      console.error("API Error:", error);
    }
  };
  return (
    <>
      <div className="mt-4">
        <div className="pb-2">
          <SubHeader type={"WIRELESS"} />
        </div>
        <div className="card aasan-card">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 pt-3">
                <Formik
                  initialValues={wirlessInitialValue()}
                  validationSchema={WirlessSchema}
                  // onSubmit={(values) => {
                  //   console.log(values);
                  onSubmit={handleSubmit}
                  // }}
                >
                  {({ handleChange, handleSubmit, values, errors }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-sm-6">
                          <InputField
                            label={"Name"}
                            type={"text"}
                            placeholder={"Name"}
                            name={"name"}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <label>Encryption</label>
                      <br />
                      <div className="row pt-2">
                        <div className="col-sm-6">
                          <RadioField
                            label={"Open"}
                            name={"encryption"}
                            onChange={handleChange}
                            checked={
                              values?.encryption == "open" ? true : false
                            }
                            value={"open"}
                          />
                        </div>
                        <div className="col-sm-6">
                          <RadioField
                            label={"Password"}
                            name={"encryption"}
                            onChange={handleChange}
                            checked={
                              values?.encryption == "password" ? true : false
                            }
                            value={"password"}
                          />
                        </div>
                        {values?.encryption === "password" && (
                          <div className="col-sm-6">
                            <InputField
                              label={"Enter Password"}
                              type={"text"}
                              placeholder={"Password"}
                              // name={"name"}
                              name={"password"}
                              onChange={handleChange}
                            />
                            <ErrorMessage name="password" component="div" className="error-message" />
                          </div>
                        )}
                        <div className="col-sm-2">
                          <InputField
                            label={"Network"}
                            type={"text"}
                            placeholder={"Network"}
                            name={"network"}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="pt-2 pb-4">
                        <Button name={"Submit"} type="submit" />
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WirlessModal;
