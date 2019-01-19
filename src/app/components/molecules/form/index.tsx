import * as React from "react";
import { Input, Button } from "../../../style/emotion";

interface Props {
  inputs: string[];
  submit: (e: { inputs: string }) => void;
  submitLabel: string;
}

export default class FormMol extends React.Component<Props> {
  initialState: any = {};
  constructor(props: Props) {
    super(props);

    this.props.inputs.forEach(input => {
      this.initialState[input] = "";
    });
    this.state = this.initialState;
  }
  render() {
    const { inputs, submit, submitLabel } = this.props;
    return (
      <div>
        <div style={{}}>
          <div>
            {inputs.map(input => (
              <div key={input}>
                <Input
                  onChange={event => {
                    this.setState({ [input]: event.target.value });
                  }}
                  placeholder={input}
                  value={this.state[input]}
                />
                <br />
                <br />
              </div>
            ))}
            <Button
              onClick={() => {
                submit(this.state as any);
                this.setState(this.initialState);
              }}
              background="#259FF2"
            >
              {submitLabel}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
