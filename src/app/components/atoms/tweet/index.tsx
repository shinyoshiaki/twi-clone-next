import * as React from "react";
import { ITweet } from "../../../const/index";
import { Segment, Header, Button } from "../../../style/emotion";
import { css } from "emotion";

export default class TweetAtoms extends React.Component<{
  tweet: ITweet;
  onClickName?: (code: string) => void;
}> {
  render() {
    const { name, code, time, text } = this.props.tweet;
    return (
      <div>
        <Segment nospace>
          <div style={{ paddingLeft: 20 }}>
            <div style={{ display: "flex" }}>
              <Header
                onClick={() => {
                  this.props.onClickName && this.props.onClickName(code);
                }}
                className={css({ ":hover": { color: "#4DB1F4" } })}
              >
                {name}
              </Header>
              {"　"}
              <div style={{ color: "gray" }}>
                {code.slice(0, 10)} - {time}
              </div>
            </div>
            <p>{text}</p>
          </div>
          <div style={{ display: "flex" }}>
            <Button size="tiny" background="white" color="gray" hover="#DE295E">
              reply
            </Button>
            <Button size="tiny" background="white" color="gray" hover="#DE295E">
              retweet
            </Button>
            <Button size="tiny" background="white" color="gray" hover="#DE295E">
              favorite
            </Button>
          </div>
        </Segment>
      </div>
    );
  }
}
