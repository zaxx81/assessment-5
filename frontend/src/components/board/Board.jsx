import { useEffect, useState } from "react";
import classes from "./Board.module.css";
import Tile from "../tile/Tile";
import saveDungeon from "../../utils/saveDungeon";

function Board({
  user,
  dungeon,
  setDungeon,
  setShowMapView,
  setDialog,
  heroLocation,
  setHeroLocation,
  explorableRooms,
  setExplorableRooms,
  completedRooms,
  setCompletedRooms,
}) {
  const renderRow = (start, end) => {
    let output = [];
    for (let i = start; i < end + 1; i++) {
      output.push(
        <Tile key={i} tile={dungeon[i - 1]} onMoveHero={onMoveHero} />
      );
    }

    return <>{output}</>;
  };

  function onMoveHero(id) {
    if (explorableRooms.includes(id)) {
      let updatedDungeon = [...dungeon];
      let updatedHeroLocation = id;
      let updatedExplorableRooms = dungeon[id - 1]["adjacentRooms"];
      let updatedVisibleTiles = dungeon[id - 1]["adjacentTiles"];

      console.log(`Moving hero to room ${updatedHeroLocation}!`);
      console.log(`Explorable Rooms: ${updatedExplorableRooms}`);

      // Add room to completedRooms before moving hero
      if (!completedRooms.includes(heroLocation)) {
        setCompletedRooms((current) => [...current, heroLocation]);
      }

      // Change Active Rooms
      updatedDungeon[heroLocation - 1]["isActive"] = false;
      updatedDungeon[updatedHeroLocation - 1]["isActive"] = true;
      updatedDungeon[updatedHeroLocation - 1]["isMasked"] = false;
      setHeroLocation(updatedHeroLocation);

      // Change Explorable/Selectable Rooms
      explorableRooms.forEach((room) => {
        updatedDungeon[room - 1]["isSelectable"] = false;
      });

      updatedExplorableRooms.forEach((room) => {
        updatedDungeon[room - 1]["isSelectable"] = true;
        updatedDungeon[room - 1]["isVisible"] = true;
      });

      setExplorableRooms(updatedExplorableRooms);

      // Update Visible Tiles
      updatedVisibleTiles.forEach((tile) => {
        updatedDungeon[tile - 1]["isVisible"] = true;
      });

      setDungeon(updatedDungeon);

      console.log(dungeon[id - 1]["dialogNode"]);
      setDialog(dungeon[id - 1]["dialogNode"]);
      setShowMapView(false);
    }
  }

  useEffect(() => {
    console.log(dungeon);
    console.log(`Current location of hero: ${heroLocation}`);
    console.log(`Rooms available to explore: ${explorableRooms}`);
    console.log(`Rooms that have been completed: ${completedRooms}`);
    saveDungeon(user, dungeon);
  }, [dungeon]);

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
