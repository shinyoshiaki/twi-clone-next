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
    Content: (close: any) => any;
  },
  { open: boolean }
> {
  state = { open: false };

  close = () => {
    this.setState({ open: false });
  };

  render() {
    const { color, background, style, label, Content } = this.props;

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
          style={{
            overlay: { background: "gray", zIndex: 9999 },
            content: {
              top: "20%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              padding: 0,
              transform: "translate(-50%, -50%)"
            }
          }}
        >
          <div style={{ width: "150vh" }}>{Content(this.close)}</div>
        </Modal>
      </div>
    );
  }
}

export default ModalAtom;
