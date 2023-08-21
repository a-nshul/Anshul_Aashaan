function RadioField(props) {
  return (
    <div>
      <div class="input-group-sm mb-3">
      <label class="form-label">{props.label}</label>
        <input type="radio" {...props} className="form-check-input aasan-checkbox" />
      </div>
    </div>
  );
}

export default RadioField;
