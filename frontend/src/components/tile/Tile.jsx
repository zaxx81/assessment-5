import classes from "./Tile.module.css";
import "../../../node_modules/rpg-awesome/css/rpg-awesome.min.css";

function Tile(props) {
  const type = props.tile["type"];
  const isVisible = props.tile["isVisible"];
  const isMasked = props.tile["isMasked"];
  const isActive = props.tile["isActive"];
  const isSelectable = props.tile["isSelectable"];
  const moveHero = props.moveHero;

  let cssClasses = classes.tile;
  let value = "";

  !isVisible
    ? (cssClasses += ` ${classes.unknown}`)
    : isMasked
    ? (cssClasses += ` ${classes.mask}`)
    : (cssClasses += ` ${classes.room}`);

  if (isActive) {
    cssClasses += ` ${classes.active}`;
    value = "ra ra-sword";
  }

  if (isSelectable) {
    cssClasses += ` ${classes.selectable}`;
  }

  if (isVisible && isMasked) value = "ra ra-uncertainty";

  return (
    <div className={cssClasses} onClick={isSelectable ? moveHero : null}>
      <i className={value}></i>
    </div>
  );
}

export default Tile;
