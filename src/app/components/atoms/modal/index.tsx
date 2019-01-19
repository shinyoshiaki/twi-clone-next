import * as React from "react";
import { Button } from "../../../style/emotion";
import Modal from "react-modal";

// Modal.setAppElement("#app");

class ModalAtom extends React.Component<
  {
    color?: string;
    background?: string;
    style?: React.CSSProperties;
    label: string;
  },
  { open: boolean }
> {
  state = { open: false };
  render() {
    const { color, background, style, label, children } = this.props;
    return (
      <div style={style}>
        <Button
          color={color}
          background={background}
          onClick={() => this.setState({ open: true })}
        >
          {label}
        </Button>
        <Modal
          isOpen={this.state.open}
          onRequestClose={() => this.setState({ open: false })}
          contentLabel={label}
          ariaHideApp={false}
          style={{ overlay: { background: "gray", zIndex: 9999 } }}
        >
          <div>{children}</div>
        </Modal>
      </div>
    );
  }
}

export default ModalAtom;
