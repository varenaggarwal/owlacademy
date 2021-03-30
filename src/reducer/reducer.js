export const INITIAL_LOAD = "INITIAL_LOAD";
export const ROUTE = "ROUTE";
export const PLAY_VIDEO = "PLAY_VIDEO";

export const reducer = (state, action) => {
  switch (action.type) {
    case INITIAL_LOAD:
      return { ...state, videoData: action.payload };

    case ROUTE:
      return { ...state, route: action.payload };

    case PLAY_VIDEO:
      return { ...state, currentPlayingVideo: action.payload };

    default:
      console.log("in default");
      break;
  }
};
