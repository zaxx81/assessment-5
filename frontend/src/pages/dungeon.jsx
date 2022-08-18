import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../layouts/Navbar";
import Board from "../components/board/Board";
import useGetDungeon from "../hooks/useGetDungeon";

function Dungeon() {
  const [isLoading, setIsLoading] = useState(true);
  const dungeon = useGetDungeon();

  useEffect(() => {
    if (dungeon.length > 0) {
      setIsLoading(false);
    }
  }, [dungeon]);

  return (
    <div>
      <Header />
      {isLoading ? console.log("loading...") : <Board dungeon={dungeon} />}
    </div>
  );
}

export default Dungeon;
