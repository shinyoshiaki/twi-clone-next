import { Action, Dispatch } from "redux";
import { apiAction } from "./utill/api";

export interface FriendState {
  follow: string[];
  follower: string[];
}

const initialFriendState: FriendState = { follow: [], follower: [] };

const START = "_start";
const FAIL = "_fail";

enum ActionName {
  ADD = "FRIEND_ADD",
  GET = "FRIEND_GET"
}

interface Add extends Action {
  type: ActionName.ADD;
  payload: { user: string };
}

export const friendAddMod = async (
  code: string,
  session: string,
  user: string,
  dispatch: Dispatch<any>
) => {
  return new Promise<boolean>(async (resolve, reject) => {
    await apiAction(
      { dir: "/friend/add", data: { code, session, user } },
      ActionName.ADD,
      dispatch
    ).catch(reject);
    resolve(true);
  });
};

interface Get extends Action {
  type: ActionName.GET;
  payload: { follow: string[]; follower: string[] };
}

export const friendGetMod = async (
  code: string,
  session: string,
  dispatch: Dispatch<any>
) => {
  return new Promise<boolean>(async (resolve, reject) => {
    await apiAction(
      { dir: "/friend/get", data: { code, session } },
      ActionName.GET,
      dispatch
    ).catch(reject);
    resolve(true);
  });
};

type Actions = Add | Get;

export default function reducer(state = initialFriendState, action: Actions) {
  switch (action.type) {
    case ActionName.ADD + START: {
      return state;
    }
    case ActionName.ADD + FAIL: {
      return state;
    }
    case ActionName.ADD: {
      return {
        ...state,
        follow: state.follow.concat([action.payload.user])
      } as FriendState;
    }
    case ActionName.GET + START: {
      return state;
    }
    case ActionName.GET + FAIL: {
      return state;
    }
    case ActionName.GET: {
      let { follow, follower } = action.payload;
      follow = follow.filter(v => {
        if (v.length > 1) return v;
      });
      follower = follower.filter(v => {
        if (v.length > 1) return v;
      });
      return {
        ...state,
        follow,
        follower
      } as FriendState;
    }
    default:
      return state;
  }
}
