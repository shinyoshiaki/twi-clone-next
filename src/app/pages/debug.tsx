import React, { FunctionComponent } from "react";
import TweetFormMol from "../components/molecules/tweetForm";

import TimelineMol, { TimelineProps } from "../components/molecules/timeline";
import { makeITweetMock } from "../components/atoms/tweet/index.stories";

export const makeTimelinePropsMock = (
  payload: { [key in keyof TimelineProps]?: TimelineProps[key] } = {}
): TimelineProps => {
  return Object.assign(
    {},
    {
      timeline: new Array(3)
        .toString()
        .split(",")
        .map(() => Object.assign({}, makeITweetMock()))
    },
    payload
  );
};

const Debug: FunctionComponent<{}> = ({}) => {
  return (
    <div>
      <TweetFormMol submit={() => {}} />
      <TimelineMol timeline={makeTimelinePropsMock().timeline} />
    </div>
  );
};

export default Debug;
