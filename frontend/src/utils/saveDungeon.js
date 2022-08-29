import axios from "axios";

const saveDungeon = (user, dungeon) => {
  axios
    .put("/api/save", { user: user, dungeon: dungeon })
    .then((response) => {
      if (response.data["result"] == "game saved") console.log("Game Saved");
    })
    .catch((error) => {
      console.log("There was an error saving: ", error);
    });
};

export default saveDungeon;
