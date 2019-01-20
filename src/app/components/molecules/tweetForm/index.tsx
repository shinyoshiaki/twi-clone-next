import * as React from "react";
import { Segment, Button, TextArea } from "../../../style/emotion";

export interface Props {
  name?: string;
  code?: string;
  submit: (text: string) => void;
  style?: any;
}

export default class TweetFormMol extends React.Component<
  Props,
  { text: string }
> {
  constructor(props: Props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    const { submit, style } = this.props;
    return (
      <div style={style}>
        <div style={{ textAlign: "center" }}>Tweet</div>
        <Segment style={{ backgroundColor: "#E8F5FE" }}>
          <div>
            <TextArea
              rows={3}
              placeholder="what are u doing?"
              maxLength={120}
              onChange={e => {
                const input = e.target.value;
                this.setState({ text: input });
              }}
              value={this.state.text}
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button>picture</Button>
            <Button
              background="#259FF2"
              onClick={() => {
                submit(this.state.text);
                this.setState({ text: "" });
              }}
            >
              submit
            </Button>
          </div>
        </Segment>
      </div>
    );
  }
}
