import axios from "axios";

export interface ITweet {
  number: number;
  time: string;
  name: string;
  code: string;
  text: string;
}

export const url =
  process.env.NODE_ENV === "production"
    ? "https://echosome.tk:9443"
    : "http://localhost:1323";

export const req = axios.create({ baseURL: url });
