import { useEffect, useState } from "react";
import initialDungeon from "../data/dungeon_initial.json";

const useGetDungeon = () => {
  const [dungeon, setDungeon] = useState([]);

  useEffect(() => {
    setDungeon(initialDungeon);
    console.log(dungeon);
  }, []);

  return dungeon;
};

export default useGetDungeon;
