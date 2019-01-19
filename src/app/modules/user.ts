import { Action, Dispatch } from "redux";
import { apiAction } from "./utill/api";

export interface UserState {
  name?: string;
  id?: string;
  session?: string;
  ui: { signup: boolean; login: boolean; update: boolean };
}

const initialUserState: UserState = {
  name: undefined,
  id: undefined,
  ui: { signup: false, login: false, update: false }
};

const START = "_start";
const FAIL = "_fail";

enum ActionName {
  SIGNUP = "SIGNUP",
  LOGIN = "LOGIN",
  UPDATE = "UPDATE"
}

type Actions = SignUpSuccess | LoginSuccess | UpdateSuccess;

interface SignUpSuccess extends Action {
  type: ActionName.SIGNUP;
  payload: { name: string; id: string };
}

interface UpdateSuccess extends Action {
  type: ActionName.UPDATE;
  payload: { name: string; id: string };
}

export const signUpMod = async (
  name: string,
  password: string,
  dispatch: Dispatch<any>
) => {
  return new Promise<boolean>(async (resolve, reject) => {
    console.log("signup");
    await apiAction(
      { dir: "/users/signup", data: { name, password } },
      ActionName.SIGNUP,
      dispatch
    ).catch(() => reject("fail"));
    await loginMod(name, password, dispatch).catch(() => reject("fail"));
    resolve(true);
  });
};

interface LoginSuccess extends Action {
  type: ActionName.LOGIN;
  payload: { name: string; id: string; session: string };
}

export const loginMod = async (
  name: string,
  password: string,
  dispatch: Dispatch<LoginSuccess>
) => {
  return new Promise<boolean>(async (resolve, reject) => {
    await apiAction(
      { dir: "/users/login", data: { name, password } },
      ActionName.LOGIN,
      dispatch
    ).catch(reject);
    resolve(true);
  });
};

export const updateMod = async (
  code: string,
  name: string,
  password: string,
  session: string,
  dispatch: Dispatch<UpdateSuccess>
) => {
  await apiAction(
    { dir: "/users/update", data: { code, name, password, session } },
    ActionName.UPDATE,
    dispatch
  );
};

export default function reducer(state = initialUserState, action: Actions) {
  switch (action.type) {
    case ActionName.SIGNUP + START: {
      return { ...state, ui: { ...state.ui, signup: true } } as UserState;
    }
    case ActionName.SIGNUP + FAIL: {
      return { ...state, ui: { ...state.ui, signup: false } } as UserState;
    }
    case ActionName.SIGNUP: {
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        ui: { ...state.ui, signup: false }
      } as UserState;
    }
    case ActionName.LOGIN + START: {
      return { ...state, ui: { ...state.ui, login: true } } as UserState;
    }
    case ActionName.LOGIN + FAIL: {
      return { ...state, ui: { ...state.ui, login: false } } as UserState;
    }
    case ActionName.LOGIN: {
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        session: action.payload.session,
        ui: { ...state.ui, login: false }
      } as UserState;
    }
    case ActionName.UPDATE + START: {
      return { ...state, ui: { ...state.ui, update: true } } as UserState;
    }
    case ActionName.UPDATE + FAIL: {
      return { ...state, ui: { ...state.ui, update: false } } as UserState;
    }
    case ActionName.UPDATE: {
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id
      } as UserState;
    }
    default:
      return state;
  }
}
