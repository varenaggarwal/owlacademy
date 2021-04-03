import { isIdPresentinArrayofObjects } from "./utility-operators";

export const INITIAL_LOAD = "INITIAL_LOAD";
export const ROUTE = "ROUTE";
export const PLAY_VIDEO = "PLAY_VIDEO";
export const TOGGLE_SAVE_VIDEO = "TOGGLE_SAVE_VIDEO";
export const ADD_NEW_PLAYLIST = "ADD_NEW_PLAYLIST";
export const TOGGLE_INTO_PLAYLIST = "TOGGLE_INTO_PLAYLIST";

export const reducer = (state, action) => {
  switch (action.type) {
    case INITIAL_LOAD:
      return { ...state, videoData: action.payload };

    case ROUTE:
      return { ...state, route: action.payload };

    case PLAY_VIDEO:
      return {
        ...state,
        currentPlayingVideo: action.payload,
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
          [action.payload.newPlaylistName]: [action.payload.video],
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
