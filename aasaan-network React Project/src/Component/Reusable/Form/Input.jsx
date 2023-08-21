function InputField(props) {
  return (
    <div>
      <div class="input-group-md mb-3">
        <label class="form-label">{props.label}</label>
        <input
         {...props}
          className="form-control"
        />
      </div>
    </div>
  );
}

export default InputField;
