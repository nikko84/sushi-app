import { INIT_SUSHIS } from "./actions";
const initialState = [];

export function sushis(state = initialState, action) {
  switch (action.type) {
    case INIT_SUSHIS:
      const { sushis } = action.payload;
      return sushis;

    default:
      return state;
  }
}
