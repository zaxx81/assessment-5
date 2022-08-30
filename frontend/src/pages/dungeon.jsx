import { useEffect, useState } from "react";

import Header from "../layouts/Navbar";
import Board from "../components/board/Board";
import Dialog from "../components/dialog/Dialog";
import initialDungeon from "../data/dungeon_initial.json";
import useGetMonsters from "../hooks/useGetMonsters";

function Dungeon({ user }) {
  const [showMapView, setShowMapView] = useState(true);
  const [dialog, setDialog] = useState("");
  const [dungeon, setDungeon] = useState(initialDungeon);
  const { monsters, monstersError } = useGetMonsters();
  const [heroLocation, setHeroLocation] = useState(15);
  const [explorableRooms, setExplorableRooms] = useState([1, 17, 29]);
  const [completedRooms, setCompletedRooms] = useState([]);

  useEffect(() => {
    console.log(dungeon);
  }, [dungeon]);

  useEffect(() => {
    console.log("Use Effect:");
    console.log(monsters);
  }, [monsters]);

  return (
    <div>
      <Header />
      {showMapView ? (
        <Board
          user={user}
          dungeon={dungeon}
          setDungeon={setDungeon}
          setShowMapView={setShowMapView}
          setDialog={setDialog}
          heroLocation={heroLocation}
          setHeroLocation={setHeroLocation}
          explorableRooms={explorableRooms}
          setExplorableRooms={setExplorableRooms}
          completedRooms={completedRooms}
          setCompletedRooms={setCompletedRooms}
        />
      ) : (
        <Dialog
          dialog={dialog}
          setShowMapView={setShowMapView}
          monsters={monsters}
        />
      )}
    </div>
  );
}

export default Dungeon;
