function Room(props) {
  return (
    <div className="room" onClick={props.onClick}>
      {props.value}
    </div>
  );
}

export default Room;
