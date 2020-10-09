import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import { basket } from "../addToBasket/reducers";
import { sushis } from "../sushis/reducer";

export default createStore(
  combineReducers({ basket, sushis }),
  devToolsEnhancer()
);
