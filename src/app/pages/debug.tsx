import React, { FunctionComponent } from "react";
import TweetFormMol from "../components/molecules/tweetForm";

import TimelineMol, { TimelineProps } from "../components/molecules/timeline";
import { makeITweetMock } from "../components/atoms/tweet/index.stories";
import InputAtom from "../components/atoms/search";
import ProfileMol from "../components/molecules/profile";

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
      <InputAtom submit={v => console.log({ v })} />
      <ProfileMol name="name" code="code" />
    </div>
  );
};

export default Debug;
