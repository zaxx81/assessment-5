import Room from "../room/Room";
import Hallway from "../hallway/Hallway";
import Blank from "../empty/Blank";
import Dialog from "../dialog/Dialog";

function Board(props) {
  const renderRoom = (i) => {
    return <Room value={i} />;
  };

  const renderHallway = (i) => {
    return <Hallway value={i} />;
  };

  const renderBlank = (i) => {
    return <Blank value={i} />;
  };

  const renderDialog = (i) => {
    return <Dialog value={i} />;
  };

  return (
    <div className="board container align-items-center">
      <div className="board-row row">
        {renderRoom("1")}
        {renderHallway("-")}
        {renderRoom("2")}
        {renderHallway("-")}
        {renderRoom("3")}
        {renderHallway("-")}
        {renderRoom("4")}
      </div>
      <div className="board-row row">
        {renderHallway("-")}
        {renderBlank("")}
        {renderHallway("-")}
        {renderBlank("")}
        {renderHallway("-")}
        {renderBlank("")}
        {renderHallway("-")}
      </div>
      <div className="board-row row">
        {renderRoom("5")}
        {renderHallway("-")}
        {renderRoom("6")}
        {renderHallway("-")}
        {renderRoom("7")}
        {renderHallway("-")}
        {renderRoom("8")}
      </div>
      <div className="board-row row">
        {renderHallway("-")}
        {renderBlank("")}
        {renderHallway("-")}
        {renderBlank("")}
        {renderHallway("-")}
        {renderBlank("")}
        {renderHallway("-")}
      </div>
      <div className="board-row row">
        {renderRoom("9")}
        {renderHallway("-")}
        {renderRoom("10")}
        {renderHallway("-")}
        {renderRoom("11")}
        {renderHallway("-")}
        {renderRoom("12")}
      </div>
      <div className="board-row row">{renderDialog("My Dialog Box")}</div>
    </div>
  );
}

export default Board;
