import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Brkovi: Svaler",
      duration: "4.05",
    },
    {
      title: "Brkovi: Ti nisi kriva",
      duration: "3.05",
    },
    {
      title: "Brkovi: Nisi me bila vredna",
      duration: "3.15",
    },
    {
      title: "Brkovi: Balkanski zigolo",
      duration: "4.15",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
