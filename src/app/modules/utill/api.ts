import axios from "axios";
import { Dispatch } from "redux";

export const req = axios.create({ baseURL: "https://echosome.tk:9443" });
// localhost:1323
// echosome.tk
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
      dispatch({ type: type + FAIL });
      reject("fail" + (e.response && e.response.data.state));
    });
    if (res) {
      dispatch({ type, payload: { ...res.data } });
      resolve(true);
    }
  });
};
