import * as React from "react";

import { ITweet } from "../../../const/index";
import TweetAtoms from "../../atoms/tweet/index";

export interface TimelineProps {
  timeline: ITweet[];
  onClickName: (v: string) => void;
}

export default class TimelineMol extends React.Component<TimelineProps, {}> {
  render() {
    const { timeline, onClickName } = this.props;
    return (
      <div>
        {timeline.reverse().map((tweet, i) => (
          <div style={{ width: "50vw" }} key={i}>
            <TweetAtoms tweet={tweet} onClickName={onClickName} />
          </div>
        ))}
      </div>
    );
  }
}
