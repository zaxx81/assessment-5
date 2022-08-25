import { useEffect, useState } from "react";

import Header from "../layouts/Navbar";
import Board from "../components/board/Board";
import Dialog from "../components/dialog/Dialog";
import initialDungeon from "../data/dungeon_initial.json";

function Dungeon(props) {
  const [dungeon, setDungeon] = useState(initialDungeon);

  useEffect(() => {
    console.log(dungeon);
  }, [dungeon]);

  return (
    <div>
      <Header />
      <Board dungeon={dungeon} />
      <Dialog dialog={"Select a room to explore!"} />
    </div>
  );
}

export default Dungeon;
