import axios from "axios";
import { Dispatch } from "redux";

console.log(process.env.NODE_ENV);

const url =
  process.env.NODE_ENV === "production"
    ? "https://echosome.tk:9443"
    : "http://localhost:1323";

export const req = axios.create({ baseURL: url });

const START = "_start";
const FAIL = "_fail";

export const apiAction = async (
  request: { dir: string; data: object },
  type: string,
  dispatch: Dispatch<any>
) => {
  return new Promise<boolean>(async (resolve, reject) => {
    dispatch({ type: type + START });
    console.log(request.data);
    const res = await req.post(request.dir, request.data).catch(e => {
      console.log({ e });
      dispatch({ type: type + FAIL });
      reject("fail");
    });
    if (res) {
      dispatch({ type, payload: { ...res.data } });
      resolve(true);
    }
  });
};
