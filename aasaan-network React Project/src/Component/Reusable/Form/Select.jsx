function SelectField(props) {
  return (
    <div>
      <select
        name={props.name}
        class="form-select"
        onChange={props.handleChange}
        value={props.selected}
      >
        <option selected>Select {props.name}</option>
        {props.options.map((item) => {
          return (
            <option value={item[props.keyValue]}>{item[props.value]}</option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectField;
