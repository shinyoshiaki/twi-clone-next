import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers
} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import user, { UserState } from "./user";
import tweet, { TweetState } from "./tweet";

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({ user, tweet }),
    applyMiddleware(thunk, logger)
  );
  return store;
}

export interface ReduxState {
  user: UserState;
  tweet: TweetState;
}
