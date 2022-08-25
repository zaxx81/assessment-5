import classes from "./Board.module.css";
import Tile from "../tile/Tile";

function Board(props) {
  const renderTile = (i) => {
    return <Tile tile={props.dungeon[i - 1]} moveHero={moveHero} />;
  };

  function moveHero() {
    console.log("You Clicked Successfully!");
  }

  return (
    <div className={`${classes.board} container align-items-center`}>
      <div className={`${classes.boardRow} row`}>
        {renderTile(1)}
        {renderTile(2)}
        {renderTile(3)}
        {renderTile(4)}
        {renderTile(5)}
        {renderTile(6)}
        {renderTile(7)}
      </div>
      <div className={`${classes.boardRow} row`}>
        {renderTile(8)}
        {renderTile(9)}
        {renderTile(10)}
        {renderTile(11)}
        {renderTile(12)}
        {renderTile(13)}
        {renderTile(14)}
      </div>
      <div className={`${classes.boardRow} row`}>
        {renderTile(15)}
        {renderTile(16)}
        {renderTile(17)}
        {renderTile(18)}
        {renderTile(19)}
        {renderTile(20)}
        {renderTile(21)}
      </div>
      <div className={`${classes.boardRow} row`}>
        {renderTile(22)}
        {renderTile(23)}
        {renderTile(24)}
        {renderTile(25)}
        {renderTile(26)}
        {renderTile(27)}
        {renderTile(28)}
      </div>
      <div className={`${classes.boardRow} row`}>
        {renderTile(29)}
        {renderTile(30)}
        {renderTile(31)}
        {renderTile(32)}
        {renderTile(33)}
        {renderTile(34)}
        {renderTile(35)}
      </div>
    </div>
  );
}

export default Board;
