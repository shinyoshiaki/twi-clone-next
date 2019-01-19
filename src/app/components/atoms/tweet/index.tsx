import * as React from "react";
import { ITweet } from "../../../const/index";
import { Segment, Header, Button } from "../../../style/emotion";

export default class TweetAtoms extends React.Component<{ tweet: ITweet }> {
  render() {
    const { name, code, time, text } = this.props.tweet;
    return (
      <div>
        <Segment>
          <div style={{ display: "flex" }}>
            <Header>{name}</Header>
            {"　"}
            {code} - {time}
          </div>
          <p>{text}</p>
          <div style={{ display: "flex" }}>
            <Button size="tiny">reply</Button>
            <Button size="tiny">retweet</Button>
            <Button size="tiny">favorite</Button>
          </div>
        </Segment>
      </div>
    );
  }
}
