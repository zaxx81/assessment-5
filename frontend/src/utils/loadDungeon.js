import axios from "axios";

const loadDungeon = async (user) => {
  let dungeon = [];
  axios
    .get("/api/save", { user: user })
    .then((response) => {
      dungeon = response.data;
      console.log("Game Loaded");
      console.log(dungeon);
    })
    .catch((error) => {
      console.log("There was an error loading saved gamed: ", error);
    });

  return dungeon;
};

export default loadDungeon;
