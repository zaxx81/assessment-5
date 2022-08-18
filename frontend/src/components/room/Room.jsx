function Room(props) {
  let classes = "";
  let isActive = props.dungeon_room["is_active"];
  let value = "";

  if (isActive) {
    classes = "room room--active";
    value = "@";
  } else if (props.dungeon_room["is_visible"]) {
    classes = "room room--visible";
  } else {
    classes = "room room--unknown";
  }

  return (
    <div className={classes} onClick={props.onClick}>
      {value}
    </div>
  );
}

export default Room;
