import { useEffect, useState } from "react";
import classes from "./Board.module.css";
import Tile from "../tile/Tile";
import useGameLogic from "../../hooks/useGameLogic";

function Board({ setShowMapView, setDialog }) {
  const { dungeon, onMoveHero, heroLocation, explorableRooms, completedRooms } =
    useGameLogic();

  const renderRow = (start, end) => {
    let output = [];
    for (let i = start; i < end + 1; i++) {
      output.push(
        <Tile key={i} tile={dungeon[i - 1]} onMoveHero={onMoveHero} />
      );
    }

    return <>{output}</>;
  };

  return (
    <div className={`${classes.board} container align-items-center`}>
      <div className={`${classes.boardRow} row`}>{renderRow(1, 7)}</div>
      <div className={`${classes.boardRow} row`}>{renderRow(8, 14)}</div>
      <div className={`${classes.boardRow} row`}>{renderRow(15, 21)}</div>
      <div className={`${classes.boardRow} row`}>{renderRow(22, 28)}</div>
      <div className={`${classes.boardRow} row`}>{renderRow(29, 35)}</div>
      <br />
      <h2>Select a room to explore!</h2>
    </div>
  );
}

export default Board;
