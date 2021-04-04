import { isIdPresentinArrayofObjects } from "./utility-operators";

export const INITIAL_LOAD = "INITIAL_LOAD";
export const ROUTE = "ROUTE";
export const ADD_TO_WATCH_HISTORY = "ADD_TO_WATCH_HISTORY";
export const TOGGLE_SAVE_VIDEO = "TOGGLE_SAVE_VIDEO";
export const ADD_NEW_PLAYLIST = "ADD_NEW_PLAYLIST";
export const TOGGLE_INTO_PLAYLIST = "TOGGLE_INTO_PLAYLIST";

export const reducer = (state, action) => {
  switch (action.type) {
    case INITIAL_LOAD:
      return { ...state, videoData: action.payload };

    case ADD_TO_WATCH_HISTORY:
      return {
        ...state,
        watchHistory: [...state.watchHistory, action.payload],
      };

    case TOGGLE_SAVE_VIDEO:
      return isIdPresentinArrayofObjects(state.savedVideos, action.payload.id)
        ? {
            ...state,
            savedVideos: state.savedVideos.filter(
              (videoObject) => videoObject.id !== action.payload.id
            ),
          }
        : { ...state, savedVideos: [...state.savedVideos, action.payload] };

    case ADD_NEW_PLAYLIST:
      return {
        ...state,
        userPlaylists: {
          ...state.userPlaylists,
          [action.payload.newPlaylistName]: [],
        },
      };

    case TOGGLE_INTO_PLAYLIST:
      return isIdPresentinArrayofObjects(
        state.userPlaylists[action.payload.playlist],
        action.payload.video.id
      )
        ? {
            ...state,
            userPlaylists: {
              ...state.userPlaylists,
              [action.payload.playlist]: state.userPlaylists[
                action.payload.playlist
              ].filter(
                (videoObject) => videoObject.id !== action.payload.video.id
              ),
            },
          }
        : {
            ...state,
            userPlaylists: {
              ...state.userPlaylists,
              [action.payload.playlist]: [
                ...state.userPlaylists[action.payload.playlist],
                action.payload.video,
              ],
            },
          };

    default:
      console.log("in default");
      break;
  }
};
