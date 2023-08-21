import { Formik, ErrorMessage } from "formik";
import InputField from "./Input";
import SelectField from "./Select";
import Button from "./Button";

function Forms(props) {
  return (
    <Formik
      initialValues={props.formValues}
      validationSchema={props.validation}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <form onSubmit={handleSubmit}>
          {props?.fields.map((item, index) => {
            return (
              <>
                {item.type == "text" && (
                  <div>
                    <label>{item.label}</label>
                    <InputField
                      type={item.type}
                      name={item.name}
                      placeholder={item.placeholder}
                      value={values[item.name]}
                      onChange={handleChange}
                    />
                    <ErrorMessage component="div" name={item.name} />
                  </div>
                )}
                {item.type == "select" && (
                  <div>
                    <label>{props.label}</label>
                    <SelectField
                      name={item.name}
                      handleChange={handleChange}
                      options={item.options}
                      keyValue={item.keyValue}
                      value={item.value}
                      selected={values[item.name]}
                    />
                    <ErrorMessage component="div" name={item.name} />
                  </div>
                )}
              </>
            );
          })}
          <div>
            <Button name={"Submit"} type={"submit"} />
          </div>
        </form>
      )}
    </Formik>
  );
}

export default Forms;
