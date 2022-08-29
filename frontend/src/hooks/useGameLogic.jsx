import { useState, useEffect } from "react";
import initialDungeon from "../data/dungeon_initial.json";

const useGameLogic = () => {
  const [dungeon, setDungeon] = useState(initialDungeon);
  const [heroLocation, setHeroLocation] = useState(15);
  const [explorableRooms, setExplorableRooms] = useState([1, 17, 29]);
  const [completedRooms, setCompletedRooms] = useState([]);

  const updatedDungeon = [...dungeon];
  const heroFrom = heroLocation;

  const onMoveHero = (id) => {
    console.log(`Moving hero to room ${id}!`);
  };

  const updateHeroLocation = () => {};

  const updateExplorableRooms = () => {};

  const updateCompletedRooms = () => {};

  return { dungeon, onMoveHero, heroLocation, explorableRooms, completedRooms };
};

export default useGameLogic;
