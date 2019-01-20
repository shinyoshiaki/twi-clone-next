import * as React from "react";
import { storiesOf } from "@storybook/react";

import Component from ".";
import { ITweet } from "../../../const/index";

export const makeITweetMock = (
  payload: { [key in keyof ITweet]?: ITweet[key] } = {}
): ITweet => {
  return Object.assign(
    {},
    {
      number: 0,
      name: "name",
      code: "id",
      time: "this is mock string",
      text: "this is mock string"
    },
    payload
  );
};

storiesOf("atoms", module).add("tweet", () => (
  <Component
    tweet={{
      name: "name",
      text: "text",
      time: "time",
      code: "code",
      number: 0
    }}
  />
));
