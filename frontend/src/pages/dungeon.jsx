import { useEffect, useState } from "react";

import Header from "../layouts/Navbar";
import Board from "../components/board/Board";
import initialDungeon from "../data/dungeon_initial.json";

function Dungeon() {
  const [dungeon, setDungeon] = useState(initialDungeon);

  useEffect(() => {
    console.log(dungeon);
  }, [dungeon]);

  return (
    <div>
      <Header />
      <Board dungeon={dungeon} />
    </div>
  );
}

export default Dungeon;
