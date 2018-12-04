import { GET_ALL_SUBWAYS, UPDATE_STATUS } from "../actions/types";

const initialState = {
  subways: [],
  subway: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SUBWAYS:
      console.log("payload - get all subways: ", action.payload);
      return {
        ...state,
        subways: action.payload
      };
    case UPDATE_STATUS:
      console.log("payload - update status: ", action.payload);
      //   return {
      //     ...state,
      //     subways: action.payload
      //   };
      return state;
    default:
      return state;
  }
}
