export const INITIAL_LOAD = "INITIAL_LOAD";

export const reducer = (state, action) => {
  switch (action.type) {
    case INITIAL_LOAD:
      return { ...state, videoListing: action.payload };

    default:
      console.log("in default");
      break;
  }
};
