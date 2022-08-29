import { useEffect, useState } from "react";
import axios from "axios";

function useLoadDungeon(user) {
  const [dungeon, setDungeon] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDungeon = async () => {
      try {
        const { data: response } = await axios.get("/api/save", { user: user });
        setDungeon(response);
      } catch (error) {
        console.log("There was an error loading saved gamed: ", error);
      }

      console.log("Game Loaded");
      console.log(dungeon);
    };

    fetchDungeon();
  }, []);

  return {
    dungeon,
  };
}

export default useLoadDungeon;
