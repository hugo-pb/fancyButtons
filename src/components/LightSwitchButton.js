function LightSwitchButton(props) {
  return (
    <button className="LightSwitchButton" onClick={props.switchLight}>
      {props.light === "on" && (
        <span>
          <i>💡</i> I'm on!
        </span>
      )}
      {props.light === "off" && (
        <span className="off">
          <i>💡</i> I'm off!
        </span>
      )}
    </button>
  );
}

export default LightSwitchButton;
