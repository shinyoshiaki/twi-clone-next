import * as React from "react";

import { ITweet } from "../../../const/index";
import TweetAtoms from "../../atoms/tweet/index";
import { Center } from "../../../style/emotion";

export interface TimelineProps {
  timeline: ITweet[];
}

export default class TimelineMol extends React.Component<TimelineProps, {}> {
  render() {
    const { timeline } = this.props;
    return (
      <div style={{ width: "100%" }}>
        <Center>
          {timeline.reverse().map((tweet,i) => (
            <div style={{ width: "50%" }} key={i}>
              <TweetAtoms tweet={tweet} />
            </div>
          ))}
        </Center>
      </div>
    );
  }
}
