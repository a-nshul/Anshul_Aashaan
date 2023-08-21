function Button(props) {
  return (
    <button className="btn btn-openwrt" {...props} >
      {props.name}
    </button>
  );
}

export default Button;
