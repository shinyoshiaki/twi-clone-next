import * as React from "react";

import styled from "@emotion/styled";

const Input = styled.input({
  height: 20,
  border: "none",
  background: "#F5F8FA"
});

const Button = styled.button((_: {}) => ({
  minWidth: 50,
  height: 32,
  borderRadius: 40,
  border: "none",

  color: "gray",
  background: "#F5F8FA",
  ":hover": { background: "gray" }
}));

export default class SearchAtom extends React.Component<
  {
    submit: (text: string) => void;
    style?: React.CSSProperties;
  },
  { text: string }
> {
  state = { text: "" };
  render() {
    return (
      <div style={this.props.style}>
        <div
          style={{
            background: "#F5F8FA",
            width: 265,
            borderRadius: 20,
            border: "solid thin gray"
          }}
        >
          <Input
            onChange={e => {
              this.setState({ text: e.target.value });
            }}
            value={this.state.text}
          />
          <Button
            onClick={() => {
              this.props.submit(this.state.text);
              this.setState({ text: "" });
            }}
          >
            search
          </Button>
        </div>
      </div>
    );
  }
}
