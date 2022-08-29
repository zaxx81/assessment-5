import { useRef } from "react";
import classes from "./Tile.module.css";
import "../../../node_modules/rpg-awesome/css/rpg-awesome.min.css";

function Tile({ tile, onMoveHero }) {
  const type = tile["type"];
  const tileId = tile["tile"];
  const isVisible = tile["isVisible"];
  const isMasked = tile["isMasked"];
  const isActive = tile["isActive"];
  const isSelectable = tile["isSelectable"];
  const roomID = useRef(tileId);

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
    <div
      id={tileId}
      className={cssClasses}
      onClick={() => onMoveHero(roomID.current)}
    >
      <i className={value}></i>
    </div>
  );
}

export default Tile;
