import Room from "../room/Room";
import Hallway from "../hallway/Hallway";
import Blank from "../empty/Blank";
import Dialog from "../dialog/Dialog";

function Board(props) {
  const renderRoom = (i) => {
    return <Room dungeon_room={props.dungeon[i]} />;
  };

  const renderHallway = (i) => {
    return <Hallway />;
  };

  const renderBlank = (i) => {
    return <Blank />;
  };

  const renderDialog = (i) => {
    return <Dialog />;
  };

  return (
    <div className="board container align-items-center">
      <div className="board-row row">
        {renderRoom(0)}
        {renderHallway()}
        {renderRoom(1)}
        {renderHallway()}
        {renderRoom(2)}
        {renderHallway()}
        {renderRoom(3)}
      </div>
      <div className="board-row row">
        {renderHallway()}
        {renderBlank()}
        {renderHallway()}
        {renderBlank()}
        {renderHallway()}
        {renderBlank()}
        {renderHallway()}
      </div>
      <div className="board-row row">
        {renderRoom(4)}
        {renderHallway()}
        {renderRoom(5)}
        {renderHallway()}
        {renderRoom(6)}
        {renderHallway()}
        {renderRoom(7)}
      </div>
      <div className="board-row row">
        {renderHallway()}
        {renderBlank()}
        {renderHallway()}
        {renderBlank()}
        {renderHallway()}
        {renderBlank()}
        {renderHallway()}
      </div>
      <div className="board-row row">
        {renderRoom(8)}
        {renderHallway()}
        {renderRoom(9)}
        {renderHallway()}
        {renderRoom(10)}
        {renderHallway()}
        {renderRoom(11)}
      </div>
      <div className="board-row row">{renderDialog("My Dialog Box")}</div>
    </div>
  );
}

export default Board;
