import * as React from "react";
import router from "next/router";
import { connect } from "react-redux";
import { ReduxState } from "../../../../modules/createStore";
import { UserState } from "../../../../modules/user";
import { postTweetMod } from "../../../../modules/tweet";
import { Dispatch } from "redux";
import { Button, Divider } from "../../../../style/emotion";
import ModalAtom from "../../../../components/atoms/modal";
import TweetFormMol from "../../../../components/molecules/tweetForm";
import SearchAtom from "../../../../components/atoms/search";

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

  handleSearch = word => {
    router.push(`/search?word=${word}`);
  };

  render() {
    const { name } = this.props;
    return (
      <div style={{ backgroundColor: "#E4EAEE" }}>
        <div
          style={{
            width: "100%",
            position: "fixed",
            zIndex: 9998,
            background: "white"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                paddingTop: 10
              }}
            >
              <Button
                color="#66747E"
                background="white"
                onClick={() => router.push("/home")}
              >
                Home
              </Button>
              <Button color="#66747E" background="white">
                Nofitication
              </Button>
              <Button color="#66747E" background="white">
                Message
              </Button>
            </div>
            <div style={{ display: "flex", paddingTop: 10 }}>
              <SearchAtom
                submit={v => {
                  this.handleSearch(v);
                }}
                style={{ marginRight: 20 }}
              />
              <Button style={{ marginRight: 20 }}>{name}</Button>
              <ModalAtom
                color="white"
                background="#259FF2"
                style={{ marginRight: 20 }}
                label="Tweet"
                Content={close => (
                  <TweetFormMol
                    submit={text => {
                      this.handleTweet(text);
                      close();
                    }}
                    style={{ width: "50vw" }}
                  />
                )}
              />
            </div>
          </div>
          <Divider />
        </div>
        <div>
          <div style={{ flex: 1, paddingTop: 50, background: "#E5EBEF" }}>
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
