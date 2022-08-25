import classes from "./Tile.module.css";

function Tile(props) {
  const type = props.tile["type"];
  const isVisible = props.tile["isVisible"];
  const isActive = props.tile["isActive"];
  const isSelectable = props.tile["isSelectable"];
  const isComplete = props.tile["isComplete"];
  const moveHero = props.moveHero;

  let cssClasses = classes.tile;
  let value = "";

  !isVisible
    ? (cssClasses += ` ${classes.unknown}`)
    : type === "blank"
    ? (cssClasses += ` ${classes.blank}`)
    : type === "hallway"
    ? (cssClasses += ` ${classes.hallway}`)
    : (cssClasses += ` ${classes.room}`);

  if (isActive) {
    cssClasses += ` ${classes.active}`;
    value = "@";
  }

  if (isSelectable) {
    cssClasses += ` ${classes.selectable}`;
  }

  return (
    <div className={cssClasses} onClick={isSelectable ? moveHero : null}>
      {value}
    </div>
  );
}

export default Tile;
