import { Action, Dispatch } from "redux";
import { ITweet } from "../const";
import { apiAction } from "./utill/api";

export interface TweetState {
  timeline: ITweet[];
  ui: { post: boolean; get: boolean };
}

const initialTweetState: TweetState = {
  timeline: [],
  ui: { post: false, get: false }
};

const START = "_start";
const FAIL = "_fail";

enum ActionName {
  POST = "POST",
  GET = "GET"
}

type Actions = Post | Get;

interface Post extends Action {
  type: ActionName.POST;
  payload: ITweet;
}

interface PostTweet {
  session: string;
  code: string;
  text: string;
}

export const postTweetMod = async (
  postTweet: PostTweet,
  dispatch: Dispatch<any>
) => {
  return new Promise<boolean>(async (resolve, reject) => {
    await apiAction(
      { dir: "/tweet/post", data: { ...postTweet } },
      ActionName.POST,
      dispatch
    ).catch(() => reject("fail"));
    resolve(true);
  });
};

interface Get extends Action {
  type: ActionName.GET;
  payload: { tweets: ITweet[] };
}

export const getTweetMod = async (
  code: string,
  session: string,
  dispatch: Dispatch<any>
) => {
  return new Promise<boolean>(async (resolve, reject) => {
    await apiAction(
      { dir: "/tweet/get", data: { code, session } },
      ActionName.GET,
      dispatch
    ).catch(() => reject("fail"));
    resolve(true);
  });
};

export default function reducer(state = initialTweetState, action: Actions) {
  switch (action.type) {
    case ActionName.POST + START: {
      return { ...state, ui: { ...state.ui, post: true } } as TweetState;
    }
    case ActionName.POST + FAIL: {
      return { ...state, ui: { ...state.ui, post: false } } as TweetState;
    }
    case ActionName.POST: {
      return {
        ...state,
        timeline: state.timeline.concat(action.payload),
        ui: { ...state.ui, post: false }
      } as TweetState;
    }
    case ActionName.GET + START: {
      return { ...state, ui: { ...state.ui, get: true } } as TweetState;
    }
    case ActionName.GET + FAIL: {
      return { ...state, ui: { ...state.ui, get: false } } as TweetState;
    }
    case ActionName.GET: {
      return {
        ...state,
        timeline: action.payload.tweets,
        ui: { ...state.ui, get: false }
      } as TweetState;
    }
    default:
      return state;
  }
}
