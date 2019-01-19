import * as React from "react";
import router from "next/router";
import { connect } from "react-redux";
import { ReduxState } from "../../../../modules/createStore";
import { UserState } from "../../../../modules/user";

import { postTweetMod } from "../../../../modules/tweet";
import { Dispatch } from "redux";
import { Button, TextArea } from "../../../../style/emotion";
import ModalAtom from "../../../../components/atoms/modal";

interface Props extends UserState {
  dispatch: Dispatch;
}

class LayoutOrg extends React.Component<Props, {}> {
  handleClick = (page: string) => {
    router.push(page);
  };

  handleTweet = async (text: string) => {
    const { id, session, dispatch } = this.props;
    if (id && session) {
      const code = id;
      await postTweetMod({ code, session, text }, dispatch).catch(console.log);
    }
  };

  render() {
    const { name } = this.props;
    return (
      <div
        style={{
          minHeight: "100vh"
        }}
      >
        <div style={{ width: "100%", position: "fixed", zIndex: 9998 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex"
              }}
            >
              <Button color="#66747E" background="white">
                Home
              </Button>
              <Button color="#66747E" background="white">
                Nofitication
              </Button>
              <Button color="#66747E" background="white">
                Message
              </Button>
            </div>
            <div style={{ display: "flex" }}>
              <TextArea style={{ marginRight: 20 }} />
              <Button style={{ marginRight: 20 }}>{name}</Button>
              <ModalAtom
                color="white"
                background="#259FF2"
                style={{ marginRight: 20 }}
                label="Tweet"
              >
                Tweet
              </ModalAtom>
            </div>
          </div>
        </div>
        <div>
          <div style={{ flex: 1, paddingTop: 100 }}>
            {<div>{this.props.children}</div>}
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  LayoutOrg
);
