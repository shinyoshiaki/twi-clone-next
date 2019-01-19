import * as React from "react";
import { Segment, Button, TextArea } from "../../../style/emotion";

export interface Props {
  name?: string;
  code?: string;
  submit: (text: string) => void;
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
    const { submit, name, code } = this.props;
    return (
      <div>
        <Segment>
          <div>
            <TextArea
              placeholder="tweet"
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
              onClick={() => {
                if (name && code) {
                  submit(this.state.text);
                }
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
