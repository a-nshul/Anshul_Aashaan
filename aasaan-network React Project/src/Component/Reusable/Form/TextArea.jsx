import { ErrorMessage } from "formik";

function TextAreaField(props) {
  return (
    <div>
      <div class="input-group-md mb-3">
        <label class="form-label">{props.label}</label>
        <textarea {...props} className="form-control"></textarea>
        <ErrorMessage name={props.name} />
      </div>
    </div>
  );
}

export default TextAreaField;
